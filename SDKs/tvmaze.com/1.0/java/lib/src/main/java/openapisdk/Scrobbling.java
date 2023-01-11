package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Scrobbling {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Scrobbling(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getScrobbleShowsShowId - List watched and acquired episodes for a show
     *
     * This endpoint can be used by all users, even without premium
    **/
    public openapisdk.models.operations.GetScrobbleShowsShowIdResponse getScrobbleShowsShowId(openapisdk.models.operations.GetScrobbleShowsShowIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scrobble/shows/{show_id}", request.pathParams);
        
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

        openapisdk.models.operations.GetScrobbleShowsShowIdResponse res = new openapisdk.models.operations.GetScrobbleShowsShowIdResponse() {{
            markedEpisodes = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MarkedEpisode[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MarkedEpisode[].class);
                res.markedEpisodes = out;
            }
        }

        return res;
    }
	
	
    /**
     * postScrobbleEpisodes - Mark episodes as acquired or watched based on their IDs
     *
     * This endpoint can be used by all users, even without premium
    **/
    public openapisdk.models.operations.PostScrobbleEpisodesResponse postScrobbleEpisodes(openapisdk.models.operations.PostScrobbleEpisodesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scrobble/episodes");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostScrobbleEpisodesResponse res = new openapisdk.models.operations.PostScrobbleEpisodesResponse() {{
            bulkResponse = null;
            bulkResponse = null;
            bulkResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.bulkResponse = out;
            }
        }
        else if (httpRes.statusCode() == 207) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.bulkResponse = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.bulkResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postScrobbleShows - Mark episodes within a show as acquired or watched based on their attributes
     *
     * To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.
     * 
     * This endpoint can be used by all users, even without premium.
     * 
    **/
    public openapisdk.models.operations.PostScrobbleShowsResponse postScrobbleShows(openapisdk.models.operations.PostScrobbleShowsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scrobble/shows");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostScrobbleShowsResponse res = new openapisdk.models.operations.PostScrobbleShowsResponse() {{
            bulkResponse = null;
            bulkResponse = null;
            bulkResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.bulkResponse = out;
            }
        }
        else if (httpRes.statusCode() == 207) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.bulkResponse = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.bulkResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * putScrobbleEpisodesEpisodeId - Mark an episode as acquired or watched based on its ID
     *
     * This endpoint can be used by all users, even without premium
    **/
    public openapisdk.models.operations.PutScrobbleEpisodesEpisodeIdResponse putScrobbleEpisodesEpisodeId(openapisdk.models.operations.PutScrobbleEpisodesEpisodeIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/scrobble/episodes/{episode_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutScrobbleEpisodesEpisodeIdResponse res = new openapisdk.models.operations.PutScrobbleEpisodesEpisodeIdResponse() {{
            markedEpisode = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MarkedEpisode out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MarkedEpisode.class);
                res.markedEpisode = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 422) {
        }

        return res;
    }
	
}