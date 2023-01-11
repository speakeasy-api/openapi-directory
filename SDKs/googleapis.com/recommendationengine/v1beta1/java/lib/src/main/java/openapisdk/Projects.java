package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Projects {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Projects(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsCatalogItemsCreate - Creates a catalog item.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse recommendationengineProjectsLocationsCatalogsCatalogItemsCreate(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/catalogItems", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse() {{
            googleCloudRecommendationengineV1beta1CatalogItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem.class);
                res.googleCloudRecommendationengineV1beta1CatalogItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsCatalogItemsImport - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse recommendationengineProjectsLocationsCatalogsCatalogItemsImport(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/catalogItems:import", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsImportResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsCatalogItemsList - Gets a list of catalog items.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse recommendationengineProjectsLocationsCatalogsCatalogItemsList(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/catalogItems", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsListResponse() {{
            googleCloudRecommendationengineV1beta1ListCatalogItemsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse.class);
                res.googleCloudRecommendationengineV1beta1ListCatalogItemsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsCatalogItemsPatch - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse recommendationengineProjectsLocationsCatalogsCatalogItemsPatch(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse() {{
            googleCloudRecommendationengineV1beta1CatalogItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1CatalogItem.class);
                res.googleCloudRecommendationengineV1beta1CatalogItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}:predict", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse() {{
            googleCloudRecommendationengineV1beta1PredictResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PredictResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PredictResponse.class);
                res.googleCloudRecommendationengineV1beta1PredictResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate - Register an API key for use with predict method.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/predictionApiKeyRegistrations", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse() {{
            googleCloudRecommendationengineV1beta1PredictionApiKeyRegistration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration.class);
                res.googleCloudRecommendationengineV1beta1PredictionApiKeyRegistration = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete - Unregister an apiKey from using for predict method.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteResponse recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDeleteResponse() {{
            googleProtobufEmpty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.googleProtobufEmpty = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList - List the registered apiKeys for use with predict method.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/predictionApiKeyRegistrations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsListResponse() {{
            googleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse.class);
                res.googleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/userEvents:collect", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectResponse() {{
            googleApiHttpBody = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleApiHttpBody out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleApiHttpBody.class);
                res.googleApiHttpBody = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/userEvents:import", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/userEvents", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse() {{
            googleCloudRecommendationengineV1beta1ListUserEventsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListUserEventsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListUserEventsResponse.class);
                res.googleCloudRecommendationengineV1beta1ListUserEventsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/userEvents:purge", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurgeResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/userEvents:rejoin", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoinResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite - Writes a single user event.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/userEvents:write", request.pathParams);
        
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWriteResponse() {{
            googleCloudRecommendationengineV1beta1UserEvent = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1UserEvent.class);
                res.googleCloudRecommendationengineV1beta1UserEvent = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsList - Lists all the catalog configurations associated with the project.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsListResponse recommendationengineProjectsLocationsCatalogsList(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/catalogs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsListResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsListResponse() {{
            googleCloudRecommendationengineV1beta1ListCatalogsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListCatalogsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommendationengineV1beta1ListCatalogsResponse.class);
                res.googleCloudRecommendationengineV1beta1ListCatalogsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsGetResponse recommendationengineProjectsLocationsCatalogsOperationsGet(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsGetResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsGetResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommendationengineProjectsLocationsCatalogsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    public openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsListResponse recommendationengineProjectsLocationsCatalogsOperationsList(openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}/operations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsListResponse res = new openapisdk.models.operations.RecommendationengineProjectsLocationsCatalogsOperationsListResponse() {{
            googleLongrunningListOperationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningListOperationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningListOperationsResponse.class);
                res.googleLongrunningListOperationsResponse = out;
            }
        }

        return res;
    }
	
}