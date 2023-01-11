package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Monetization {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Monetization(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * androidpublisherMonetizationConvertRegionPrices - Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationConvertRegionPricesResponse androidpublisherMonetizationConvertRegionPrices(openapisdk.models.operations.AndroidpublisherMonetizationConvertRegionPricesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationConvertRegionPricesResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationConvertRegionPricesResponse() {{
            convertRegionPricesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConvertRegionPricesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConvertRegionPricesResponse.class);
                res.convertRegionPricesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsArchive - Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsArchiveResponse androidpublisherMonetizationSubscriptionsArchive(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsArchiveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsArchiveResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsArchiveResponse() {{
            subscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Subscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Subscription.class);
                res.subscription = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansActivate - Activates a base plan. Once activated, base plans will be available to new subscribers.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateResponse androidpublisherMonetizationSubscriptionsBasePlansActivate(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateResponse() {{
            subscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Subscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Subscription.class);
                res.subscription = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansDeactivate - Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateResponse androidpublisherMonetizationSubscriptionsBasePlansDeactivate(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateResponse() {{
            subscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Subscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Subscription.class);
                res.subscription = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansDelete - Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteResponse androidpublisherMonetizationSubscriptionsBasePlansDelete(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansMigratePrices - Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesResponse androidpublisherMonetizationSubscriptionsBasePlansMigratePrices(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesResponse() {{
            migrateBasePlanPricesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.migrateBasePlanPricesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersActivate - Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateResponse androidpublisherMonetizationSubscriptionsBasePlansOffersActivate(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateResponse() {{
            subscriptionOffer = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SubscriptionOffer out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SubscriptionOffer.class);
                res.subscriptionOffer = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersCreate - Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse androidpublisherMonetizationSubscriptionsBasePlansOffersCreate(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse() {{
            subscriptionOffer = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SubscriptionOffer out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SubscriptionOffer.class);
                res.subscriptionOffer = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate - Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse() {{
            subscriptionOffer = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SubscriptionOffer out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SubscriptionOffer.class);
                res.subscriptionOffer = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersDelete - Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse androidpublisherMonetizationSubscriptionsBasePlansOffersDelete(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersGet - Reads a single offer
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse androidpublisherMonetizationSubscriptionsBasePlansOffersGet(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse() {{
            subscriptionOffer = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SubscriptionOffer out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SubscriptionOffer.class);
                res.subscriptionOffer = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersList - Lists all offers under a given subscription.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse androidpublisherMonetizationSubscriptionsBasePlansOffersList(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse() {{
            listSubscriptionOffersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListSubscriptionOffersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListSubscriptionOffersResponse.class);
                res.listSubscriptionOffersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsBasePlansOffersPatch - Updates an existing subscription offer.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse androidpublisherMonetizationSubscriptionsBasePlansOffersPatch(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse() {{
            subscriptionOffer = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SubscriptionOffer out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SubscriptionOffer.class);
                res.subscriptionOffer = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsCreate - Creates a new subscription. Newly added base plans will remain in draft state until activated.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsCreateResponse androidpublisherMonetizationSubscriptionsCreate(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsCreateResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsCreateResponse() {{
            subscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Subscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Subscription.class);
                res.subscription = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsDelete - Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsDeleteResponse androidpublisherMonetizationSubscriptionsDelete(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsDeleteResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsGet - Reads a single subscription.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsGetResponse androidpublisherMonetizationSubscriptionsGet(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsGetResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsGetResponse() {{
            subscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Subscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Subscription.class);
                res.subscription = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsList - Lists all subscriptions under a given app.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsListResponse androidpublisherMonetizationSubscriptionsList(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsListResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsListResponse() {{
            listSubscriptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListSubscriptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListSubscriptionsResponse.class);
                res.listSubscriptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * androidpublisherMonetizationSubscriptionsPatch - Updates an existing subscription.
    **/
    public openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsPatchResponse androidpublisherMonetizationSubscriptionsPatch(openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}", request.pathParams);
        
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

        openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsPatchResponse res = new openapisdk.models.operations.AndroidpublisherMonetizationSubscriptionsPatchResponse() {{
            subscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Subscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Subscription.class);
                res.subscription = out;
            }
        }

        return res;
    }
	
}