package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class MatrixApi {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public MatrixApi(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * calculateMatrix - Batch Matrix Endpoint
     *
     * Prefer the [synchronous endpoint](#operation/postMatrix) and use this Batch endpoint for long running problems only.
     * 
     * The Batch Matrix endpoint allows using matrices with more locations and works asynchronously - similar to the [Batch Route Optimization endpoint](#operation/asyncVRP):
     *  * Create a HTTP POST request against `/matrix/calculate` and add the key in the URL: `/matrix/calculate?key=[YOUR_KEY]`. This will give you the `job_id` from the response json like `{ "job_id": "7ac65787-fb99-4e02-a832-2c3010c70097" }`
     *  * Poll via HTTP GET requests every 500ms against `/matrix/solution/[job_id]`
     * 
     * Here are some full examples via curl:
     * ```bash
     * $ curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix/calculate?key=[YOUR_KEY]" -d '{"points":[[13.29895,52.48696],[13.370876,52.489575],[13.439026,52.511206]]}'
     * {"job_id":"7ac65787-fb99-4e02-a832-2c3010c70097"}
     * ```
     * 
     * Pick the returned `job_id` and use it in the next GET requests:
     * ```bash
     * $ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
     * {"status":"waiting"}
     * ```
     * 
     * When the calculation is finished (`status:finished`) the JSON response will contain the full matrix JSON under `solution`:
     * ```bash
     * $ curl -X GET "https://graphhopper.com/api/1/matrix/solution/7ac65787-fb99-4e02-a832-2c3010c70097?key=[YOUR_KEY]"
     * {"solution":{"weights":[[0.0,470.453,945.414],[503.793,0.0,580.871],[970.49,569.511,0.0]],"info":{"copyrights":["GraphHopper","OpenStreetMap contributors"]}},"status":"finished"}
     * ```
     * 
     * Please note that if an error occured while calculation the JSON will not have a status but contain directly the error message e.g.:
     * ```json
     * {"message":"Cannot find from_points: 1"}
     * ```
     * And the optional `hints` array.
     * 
    **/
    public openapisdk.models.operations.CalculateMatrixResponse calculateMatrix(openapisdk.models.operations.CalculateMatrixRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/matrix/calculate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CalculateMatrixResponse res = new openapisdk.models.operations.CalculateMatrixResponse() {{
            jobId = null;
            ghError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.JobId out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.JobId.class);
                res.jobId = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GhError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GhError.class);
                res.ghError = out;
            }
        }

        return res;
    }
	
	
    /**
     * getMatrix - GET Matrix Endpoint
     *
     * With this Matrix Endpoint you submit the points and parameters via URL parameters and is the most convenient
     * as it works out-of-the-box in the browser. If possible you should
     * prefer using the [POST Matrix Endpoint](#operation/postMatrix) that avoids problems with many locations
     * and can also gzip the **request**. (Note, that all endpoints return gzipped responses).
     * 
    **/
    public openapisdk.models.operations.GetMatrixResponse getMatrix(openapisdk.models.operations.GetMatrixRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/matrix");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMatrixResponse res = new openapisdk.models.operations.GetMatrixResponse() {{
            matrixResponse = null;
            ghError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MatrixResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MatrixResponse.class);
                res.matrixResponse = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GhError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GhError.class);
                res.ghError = out;
            }
        }

        return res;
    }
	
	
    /**
     * getMatrixSolution - GET Batch Matrix Endpoint
     *
     * This endpoint returns the solution of a JSON submitted to the Batch Matrix endpoint. You can fetch it with the job_id, you have been sent.
     * 
    **/
    public openapisdk.models.operations.GetMatrixSolutionResponse getMatrixSolution(openapisdk.models.operations.GetMatrixSolutionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/matrix/solution/{jobId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMatrixSolutionResponse res = new openapisdk.models.operations.GetMatrixSolutionResponse() {{
            matrixResponse = null;
            ghError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MatrixResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MatrixResponse.class);
                res.matrixResponse = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GhError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GhError.class);
                res.ghError = out;
            }
        }

        return res;
    }
	
	
    /**
     * postMatrix - POST Matrix Endpoint
     *
     * 
     * The [GET endpoint](#operation/getMatrix) has an URL length limitation, which hurts for many locations per request.
     * In those cases use this POST endpoint with a JSON as input. The only parameter in the URL will be the key.
     * Both request scenarios are identical except that all singular parameter names are named as their plural for a POST request.
     * The effected parameters are: `points`, `from_points`, `to_points`, and `out_arrays`. For the remaining parameters
     * please refer to the [guide of the GET endpoint](#operation/getMatrix).
     * 
     * **Please note that in contrast to GET endpoint the points have to be specified as `[longitude, latitude]` array (in that order, similar to [GeoJson](http://geojson.org/geojson-spec.html#examples))**.
     * 
     * For example the query `point=10,11&point=20,22&vehicle=car` will be converted to the following JSON:
     * ```json
     * { "points": [[11,10], [22,20]], "vehicle": "car" }
     * ```
     * 
     * A complete curl Example:
     * ```bash
     * curl -X POST -H "Content-Type: application/json" "https://graphhopper.com/api/1/matrix?key=[YOUR_KEY]" -d '{"elevation":false,"out_arrays":["weights", "times"],"from_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"to_points":[[-0.087891,51.534377],[-0.090637,51.467697],[-0.171833,51.521241],[-0.211487,51.473685]],"vehicle":"car"}'
     * ```
     * 
    **/
    public openapisdk.models.operations.PostMatrixResponse postMatrix(openapisdk.models.operations.PostMatrixRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/matrix");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostMatrixResponse res = new openapisdk.models.operations.PostMatrixResponse() {{
            matrixResponse = null;
            ghError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MatrixResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MatrixResponse.class);
                res.matrixResponse = out;
            }
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GhError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GhError.class);
                res.ghError = out;
            }
        }

        return res;
    }
	
}