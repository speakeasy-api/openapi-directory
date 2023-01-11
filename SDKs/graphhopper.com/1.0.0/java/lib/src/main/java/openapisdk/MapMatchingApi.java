package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class MapMatchingApi {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public MapMatchingApi(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postGpx - Map-match a GPX file
     *
     * ### Example
     * You get an example response for a GPX via:
     * 
     * ```
     * curl -XPOST -H "Content-Type: application/gpx+xml" "https://graphhopper.com/api/1/match?vehicle=car&key=[YOUR_KEY]" --data @/path/to/some.gpx
     * ```
     * 
     * A minimal working GPX file looks like
     * ```gpx
     * <gpx>
     *  <trk>
     *   <trkseg>
     *    <trkpt lat="51.343657" lon="12.360708"></trkpt>
     *    <trkpt lat="51.343796" lon="12.361337"></trkpt>
     *    <trkpt lat="51.342784" lon="12.361882"></trkpt>
     *   </trkseg>
     *  </trk>
     * </gpx>
     * ```
     * 
     * ### Introduction
     * ![Map Matching screenshot](./img/map-matching-example.gif)
     * 
     * The Map Matching API is part of the GraphHopper Directions API and with this API you can snap measured GPS points typically as GPX files to a digital
     * road network to e.g. clean data or attach certain data like elevation or turn instructions to it. Read more at Wikipedia.
     * 
     * In the example screenshot above and demo you see the Map Matching API in action where the black line is the GPS track and the green one is matched result.
     * 
     * Most of the times, you can simply POST a GPX file, but some of the request parameters of the [Routing API](#tag/Routing-API) apply here, too.
     * 
     * ### API Clients and Examples
     * See the [clients](#section/API-Clients) section in the main documentation, and [live examples](https://graphhopper.com/api/1/examples/#map-matching).
     * 
     * ### Limits and Counts
     * The cost for one request depends on the number of GPS location and is documented [here](https://graphhopper.com/api/1/docs/FAQ/).
     * 
     * One request should not exceed the Map Matching API location limit depending on the package, see the pricing in our dashboard.
     * 
    **/
    public openapisdk.models.operations.PostGpxResponse postGpx(openapisdk.models.operations.PostGpxRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/match");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.PostGpxResponse res = new openapisdk.models.operations.PostGpxResponse() {{
            routeResponse = null;
            ghError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RouteResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RouteResponse.class);
                res.routeResponse = out;
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