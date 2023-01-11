package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Platforms {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Platforms(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * ideahubPlatformsPropertiesIdeaActivitiesCreate - Creates an idea activity entry.
    **/
    public openapisdk.models.operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse ideahubPlatformsPropertiesIdeaActivitiesCreate(openapisdk.models.operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/ideaActivities", request.pathParams);
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse res = new openapisdk.models.operations.IdeahubPlatformsPropertiesIdeaActivitiesCreateResponse() {{
            googleSearchIdeahubV1betaIdeaActivity = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleSearchIdeahubV1betaIdeaActivity out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleSearchIdeahubV1betaIdeaActivity.class);
                res.googleSearchIdeahubV1betaIdeaActivity = out;
            }
        }

        return res;
    }
	
	
    /**
     * ideahubPlatformsPropertiesIdeasList - List ideas for a given Creator and filter and sort options.
    **/
    public openapisdk.models.operations.IdeahubPlatformsPropertiesIdeasListResponse ideahubPlatformsPropertiesIdeasList(openapisdk.models.operations.IdeahubPlatformsPropertiesIdeasListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/ideas", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdeahubPlatformsPropertiesIdeasListResponse res = new openapisdk.models.operations.IdeahubPlatformsPropertiesIdeasListResponse() {{
            googleSearchIdeahubV1betaListIdeasResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleSearchIdeahubV1betaListIdeasResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleSearchIdeahubV1betaListIdeasResponse.class);
                res.googleSearchIdeahubV1betaListIdeasResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * ideahubPlatformsPropertiesLocalesList - Returns which locales ideas are available in for a given Creator.
    **/
    public openapisdk.models.operations.IdeahubPlatformsPropertiesLocalesListResponse ideahubPlatformsPropertiesLocalesList(openapisdk.models.operations.IdeahubPlatformsPropertiesLocalesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/locales", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdeahubPlatformsPropertiesLocalesListResponse res = new openapisdk.models.operations.IdeahubPlatformsPropertiesLocalesListResponse() {{
            googleSearchIdeahubV1betaListAvailableLocalesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleSearchIdeahubV1betaListAvailableLocalesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleSearchIdeahubV1betaListAvailableLocalesResponse.class);
                res.googleSearchIdeahubV1betaListAvailableLocalesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * ideahubPlatformsPropertiesTopicStatesPatch - Update a topic state resource.
    **/
    public openapisdk.models.operations.IdeahubPlatformsPropertiesTopicStatesPatchResponse ideahubPlatformsPropertiesTopicStatesPatch(openapisdk.models.operations.IdeahubPlatformsPropertiesTopicStatesPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdeahubPlatformsPropertiesTopicStatesPatchResponse res = new openapisdk.models.operations.IdeahubPlatformsPropertiesTopicStatesPatchResponse() {{
            googleSearchIdeahubV1betaTopicState = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleSearchIdeahubV1betaTopicState out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleSearchIdeahubV1betaTopicState.class);
                res.googleSearchIdeahubV1betaTopicState = out;
            }
        }

        return res;
    }
	
}