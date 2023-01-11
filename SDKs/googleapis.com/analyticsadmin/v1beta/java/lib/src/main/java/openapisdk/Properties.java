package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Properties {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Properties(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * analyticsadminPropertiesAcknowledgeUserDataCollection - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or via this API) before MeasurementProtocolSecret resources may be created.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse analyticsadminPropertiesAcknowledgeUserDataCollection(openapisdk.models.operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{property}:acknowledgeUserDataCollection", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse() {{
            googleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.googleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesConversionEventsCreate - Creates a conversion event with the specified attributes.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesConversionEventsCreateResponse analyticsadminPropertiesConversionEventsCreate(openapisdk.models.operations.AnalyticsadminPropertiesConversionEventsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/conversionEvents", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesConversionEventsCreateResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesConversionEventsCreateResponse() {{
            googleAnalyticsAdminV1betaConversionEvent = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaConversionEvent out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaConversionEvent.class);
                res.googleAnalyticsAdminV1betaConversionEvent = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesConversionEventsList - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesConversionEventsListResponse analyticsadminPropertiesConversionEventsList(openapisdk.models.operations.AnalyticsadminPropertiesConversionEventsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/conversionEvents", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesConversionEventsListResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesConversionEventsListResponse() {{
            googleAnalyticsAdminV1betaListConversionEventsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaListConversionEventsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaListConversionEventsResponse.class);
                res.googleAnalyticsAdminV1betaListConversionEventsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesCreate - Creates an "GA4" property with the specified location and attributes.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesCreateResponse analyticsadminPropertiesCreate(openapisdk.models.operations.AnalyticsadminPropertiesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/properties");
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesCreateResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesCreateResponse() {{
            googleAnalyticsAdminV1betaProperty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaProperty out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaProperty.class);
                res.googleAnalyticsAdminV1betaProperty = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesCustomDimensionsCreate - Creates a CustomDimension.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse analyticsadminPropertiesCustomDimensionsCreate(openapisdk.models.operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/customDimensions", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse() {{
            googleAnalyticsAdminV1betaCustomDimension = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomDimension out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomDimension.class);
                res.googleAnalyticsAdminV1betaCustomDimension = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesCustomDimensionsList - Lists CustomDimensions on a property.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesCustomDimensionsListResponse analyticsadminPropertiesCustomDimensionsList(openapisdk.models.operations.AnalyticsadminPropertiesCustomDimensionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/customDimensions", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesCustomDimensionsListResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesCustomDimensionsListResponse() {{
            googleAnalyticsAdminV1betaListCustomDimensionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaListCustomDimensionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaListCustomDimensionsResponse.class);
                res.googleAnalyticsAdminV1betaListCustomDimensionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesCustomMetricsArchive - Archives a CustomMetric on a property.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse analyticsadminPropertiesCustomMetricsArchive(openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{name}:archive", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse() {{
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
     * analyticsadminPropertiesCustomMetricsCreate - Creates a CustomMetric.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsCreateResponse analyticsadminPropertiesCustomMetricsCreate(openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/customMetrics", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsCreateResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsCreateResponse() {{
            googleAnalyticsAdminV1betaCustomMetric = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomMetric out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaCustomMetric.class);
                res.googleAnalyticsAdminV1betaCustomMetric = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesCustomMetricsList - Lists CustomMetrics on a property.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsListResponse analyticsadminPropertiesCustomMetricsList(openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/customMetrics", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsListResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesCustomMetricsListResponse() {{
            googleAnalyticsAdminV1betaListCustomMetricsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaListCustomMetricsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaListCustomMetricsResponse.class);
                res.googleAnalyticsAdminV1betaListCustomMetricsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesDataStreamsCreate - Creates a DataStream.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsCreateResponse analyticsadminPropertiesDataStreamsCreate(openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/dataStreams", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsCreateResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsCreateResponse() {{
            googleAnalyticsAdminV1betaDataStream = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaDataStream out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaDataStream.class);
                res.googleAnalyticsAdminV1betaDataStream = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesDataStreamsList - Lists DataStreams on a property.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsListResponse analyticsadminPropertiesDataStreamsList(openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/dataStreams", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsListResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsListResponse() {{
            googleAnalyticsAdminV1betaListDataStreamsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaListDataStreamsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaListDataStreamsResponse.class);
                res.googleAnalyticsAdminV1betaListDataStreamsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate - Creates a measurement protocol secret.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/measurementProtocolSecrets", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse() {{
            googleAnalyticsAdminV1betaMeasurementProtocolSecret = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret.class);
                res.googleAnalyticsAdminV1betaMeasurementProtocolSecret = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet - Lookup for a single "GA4" MeasurementProtocolSecret.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGet(openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{name}", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse() {{
            googleAnalyticsAdminV1betaMeasurementProtocolSecret = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret.class);
                res.googleAnalyticsAdminV1betaMeasurementProtocolSecret = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList - Returns child MeasurementProtocolSecrets under the specified parent Property.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse analyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/measurementProtocolSecrets", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse() {{
            googleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse.class);
                res.googleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesFirebaseLinksCreate - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse analyticsadminPropertiesFirebaseLinksCreate(openapisdk.models.operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/firebaseLinks", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse() {{
            googleAnalyticsAdminV1betaFirebaseLink = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaFirebaseLink out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaFirebaseLink.class);
                res.googleAnalyticsAdminV1betaFirebaseLink = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesFirebaseLinksList - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesFirebaseLinksListResponse analyticsadminPropertiesFirebaseLinksList(openapisdk.models.operations.AnalyticsadminPropertiesFirebaseLinksListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/firebaseLinks", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesFirebaseLinksListResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesFirebaseLinksListResponse() {{
            googleAnalyticsAdminV1betaListFirebaseLinksResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaListFirebaseLinksResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaListFirebaseLinksResponse.class);
                res.googleAnalyticsAdminV1betaListFirebaseLinksResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesGoogleAdsLinksCreate - Creates a GoogleAdsLink.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse analyticsadminPropertiesGoogleAdsLinksCreate(openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/googleAdsLinks", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse() {{
            googleAnalyticsAdminV1betaGoogleAdsLink = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLink out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLink.class);
                res.googleAnalyticsAdminV1betaGoogleAdsLink = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesGoogleAdsLinksDelete - Deletes a GoogleAdsLink on a property
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteResponse analyticsadminPropertiesGoogleAdsLinksDelete(openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{name}", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksDeleteResponse() {{
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
     * analyticsadminPropertiesGoogleAdsLinksList - Lists GoogleAdsLinks on a property.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse analyticsadminPropertiesGoogleAdsLinksList(openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/{parent}/googleAdsLinks", request.pathParams);
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse() {{
            googleAnalyticsAdminV1betaListGoogleAdsLinksResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse.class);
                res.googleAnalyticsAdminV1betaListGoogleAdsLinksResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesGoogleAdsLinksPatch - Updates a GoogleAdsLink on a property
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksPatchResponse analyticsadminPropertiesGoogleAdsLinksPatch(openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksPatchRequest request) throws Exception {
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
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksPatchResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesGoogleAdsLinksPatchResponse() {{
            googleAnalyticsAdminV1betaGoogleAdsLink = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLink out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaGoogleAdsLink.class);
                res.googleAnalyticsAdminV1betaGoogleAdsLink = out;
            }
        }

        return res;
    }
	
	
    /**
     * analyticsadminPropertiesList - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
    **/
    public openapisdk.models.operations.AnalyticsadminPropertiesListResponse analyticsadminPropertiesList(openapisdk.models.operations.AnalyticsadminPropertiesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta/properties");
        
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

        openapisdk.models.operations.AnalyticsadminPropertiesListResponse res = new openapisdk.models.operations.AnalyticsadminPropertiesListResponse() {{
            googleAnalyticsAdminV1betaListPropertiesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAnalyticsAdminV1betaListPropertiesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAnalyticsAdminV1betaListPropertiesResponse.class);
                res.googleAnalyticsAdminV1betaListPropertiesResponse = out;
            }
        }

        return res;
    }
	
}