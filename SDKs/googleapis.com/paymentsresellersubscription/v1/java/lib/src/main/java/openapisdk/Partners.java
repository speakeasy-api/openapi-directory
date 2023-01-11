package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Partners {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Partners(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * paymentsresellersubscriptionPartnersProductsList - To retrieve the products that can be resold by the partner. It should be autenticated with a service account.
    **/
    public openapisdk.models.operations.PaymentsresellersubscriptionPartnersProductsListResponse paymentsresellersubscriptionPartnersProductsList(openapisdk.models.operations.PaymentsresellersubscriptionPartnersProductsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/products", request.pathParams);
        
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

        openapisdk.models.operations.PaymentsresellersubscriptionPartnersProductsListResponse res = new openapisdk.models.operations.PaymentsresellersubscriptionPartnersProductsListResponse() {{
            googleCloudPaymentsResellerSubscriptionV1ListProductsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse.class);
                res.googleCloudPaymentsResellerSubscriptionV1ListProductsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * paymentsresellersubscriptionPartnersPromotionsFindEligible - To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.
    **/
    public openapisdk.models.operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse paymentsresellersubscriptionPartnersPromotionsFindEligible(openapisdk.models.operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/promotions:findEligible", request.pathParams);
        
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

        openapisdk.models.operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse res = new openapisdk.models.operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse() {{
            googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse.class);
                res.googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * paymentsresellersubscriptionPartnersPromotionsList - To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
    **/
    public openapisdk.models.operations.PaymentsresellersubscriptionPartnersPromotionsListResponse paymentsresellersubscriptionPartnersPromotionsList(openapisdk.models.operations.PaymentsresellersubscriptionPartnersPromotionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/promotions", request.pathParams);
        
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

        openapisdk.models.operations.PaymentsresellersubscriptionPartnersPromotionsListResponse res = new openapisdk.models.operations.PaymentsresellersubscriptionPartnersPromotionsListResponse() {{
            googleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse.class);
                res.googleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsCancel - Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
    **/
    public openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse paymentsresellersubscriptionPartnersSubscriptionsCancel(openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:cancel", request.pathParams);
        
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

        openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse res = new openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse() {{
            googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse.class);
                res.googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsCreate - Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
    **/
    public openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse paymentsresellersubscriptionPartnersSubscriptionsCreate(openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/subscriptions", request.pathParams);
        
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

        openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse res = new openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse() {{
            googleCloudPaymentsResellerSubscriptionV1Subscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription.class);
                res.googleCloudPaymentsResellerSubscriptionV1Subscription = out;
            }
        }

        return res;
    }
	
	
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsEntitle - Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
    **/
    public openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse paymentsresellersubscriptionPartnersSubscriptionsEntitle(openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:entitle", request.pathParams);
        
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

        openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse res = new openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse() {{
            googleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse.class);
                res.googleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsExtend - [Deprecated] New partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
    **/
    public openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse paymentsresellersubscriptionPartnersSubscriptionsExtend(openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:extend", request.pathParams);
        
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

        openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse res = new openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse() {{
            googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse.class);
                res.googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsGet - Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
    **/
    public openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse paymentsresellersubscriptionPartnersSubscriptionsGet(openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse res = new openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse() {{
            googleCloudPaymentsResellerSubscriptionV1Subscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription.class);
                res.googleCloudPaymentsResellerSubscriptionV1Subscription = out;
            }
        }

        return res;
    }
	
	
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsProvision - Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
    **/
    public openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse paymentsresellersubscriptionPartnersSubscriptionsProvision(openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/subscriptions:provision", request.pathParams);
        
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

        openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse res = new openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse() {{
            googleCloudPaymentsResellerSubscriptionV1Subscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription.class);
                res.googleCloudPaymentsResellerSubscriptionV1Subscription = out;
            }
        }

        return res;
    }
	
	
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsUndoCancel - Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.
    **/
    public openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse paymentsresellersubscriptionPartnersSubscriptionsUndoCancel(openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:undoCancel", request.pathParams);
        
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

        openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse res = new openapisdk.models.operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse() {{
            googleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse.class);
                res.googleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse = out;
            }
        }

        return res;
    }
	
}