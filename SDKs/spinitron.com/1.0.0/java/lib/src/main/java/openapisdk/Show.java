package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Show {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Show(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getShows - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
     *
     * **Terminology**: Spinitron defines a *show* as a radio program. A show can have one or more *schedules*,
     * each of which may specify either an *occurence* or a *repetition*, which represents a set of occurences.
     * Thus scheduled shows have occurences that, for example, may be displayed in a calendar.
     * 
     * In the response, `items` is an array of objects representing occurences of scheduled shows.
     * 
     * You may optionally filter `items` to a datetime *range* by including in the request {start} and/or {end}
     * parameters, both of which must be no more than one hour in the past. An occurence starting at {end} is
     * included in the reponse.
     * 
     * `itmes` can include occurences that begin *or* end within the filter range. A show that goes on air before
     * {start} appears in `items` if it ends *after* but not *at* {start}. An occurence starting at or before {end}
     * is included.
     * 
     * If the request omits the {start} parameter, the server sets its value to the current time so that the filter
     * range's start is always defined. If the request specifies {end} then the requested range is *bounded*,
     * otherwise it is *unbounded*.
     * 
     * For a bounded request, `items` includes *every* occurence of all shows occuring in the range. The only
     * difference between objects in `items` representing a given show will be the `start` field value.
     * 
     * For an unbounded request, `items` includes *only one* occurence per show, specifically, the
     * next occurrence after {start} of all shows occuring after {start}.
     * 
     * Use an unbounded request to get a straight list all shows. Use a bounded request to get a calendar/agenda
     * of shows expanded into occurrences by thir shedules and repetitions.
     * 
     * Objects in `items` are ordered first by `datetime` and then by `id`.
     * 
    **/
    public openapisdk.models.operations.GetShowsResponse getShows(openapisdk.models.operations.GetShowsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/shows");
        
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

        openapisdk.models.operations.GetShowsResponse res = new openapisdk.models.operations.GetShowsResponse() {{
            getShows200ApplicationJSONObject = null;
            body = null;
            body = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetShows200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetShows200ApplicationJson.class);
                res.getShows200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
	
    /**
     * getShowsId - Get a Show by id
     *
     * The response object represents the next occurence of the show specified by {id}.
     * 
     * Status 404 is returned if a show with {id} does not exist or if it does but all its scheduled occurences elapsed in the past.
     * 
    **/
    public openapisdk.models.operations.GetShowsIdResponse getShowsId(openapisdk.models.operations.GetShowsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/shows/{id}", request.pathParams);
        
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

        openapisdk.models.operations.GetShowsIdResponse res = new openapisdk.models.operations.GetShowsIdResponse() {{
            show = null;
            body = null;
            body = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Show out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Show.class);
                res.show = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Error out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Error.class);
                res.error = out;
            }
        }

        return res;
    }
	
}