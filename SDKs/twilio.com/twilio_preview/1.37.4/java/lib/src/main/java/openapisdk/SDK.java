

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;


public class SDK {
	public static final String[] SERVERS = {
		"https://preview.twilio.com",
	};
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		public SDK build() throws Exception {
			return new SDK(this.client, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = openapisdk.utils.Utils.replaceParameters(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}
		
	}
	
	
    /**
     * createDeployedDevicesCertificate - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
    **/
    public openapisdk.models.operations.CreateDeployedDevicesCertificateResponse createDeployedDevicesCertificate(openapisdk.models.operations.CreateDeployedDevicesCertificateRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateDeployedDevicesCertificateRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Certificates", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateDeployedDevicesCertificateResponse res = new openapisdk.models.operations.CreateDeployedDevicesCertificateResponse() {{
            previewDeployedDevicesFleetCertificate = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate.class);
                res.previewDeployedDevicesFleetCertificate = out;
            }
        }

        return res;
    }
	
	
    /**
     * createDeployedDevicesDeployment - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
    **/
    public openapisdk.models.operations.CreateDeployedDevicesDeploymentResponse createDeployedDevicesDeployment(openapisdk.models.operations.CreateDeployedDevicesDeploymentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateDeployedDevicesDeploymentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Deployments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateDeployedDevicesDeploymentResponse res = new openapisdk.models.operations.CreateDeployedDevicesDeploymentResponse() {{
            previewDeployedDevicesFleetDeployment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment.class);
                res.previewDeployedDevicesFleetDeployment = out;
            }
        }

        return res;
    }
	
	
    /**
     * createDeployedDevicesDevice - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
    **/
    public openapisdk.models.operations.CreateDeployedDevicesDeviceResponse createDeployedDevicesDevice(openapisdk.models.operations.CreateDeployedDevicesDeviceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateDeployedDevicesDeviceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Devices", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateDeployedDevicesDeviceResponse res = new openapisdk.models.operations.CreateDeployedDevicesDeviceResponse() {{
            previewDeployedDevicesFleetDevice = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetDevice out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetDevice.class);
                res.previewDeployedDevicesFleetDevice = out;
            }
        }

        return res;
    }
	
	
    /**
     * createDeployedDevicesFleet - Create a new Fleet for scoping of deployed devices within your account.
    **/
    public openapisdk.models.operations.CreateDeployedDevicesFleetResponse createDeployedDevicesFleet(openapisdk.models.operations.CreateDeployedDevicesFleetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateDeployedDevicesFleetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateDeployedDevicesFleetResponse res = new openapisdk.models.operations.CreateDeployedDevicesFleetResponse() {{
            previewDeployedDevicesFleet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleet.class);
                res.previewDeployedDevicesFleet = out;
            }
        }

        return res;
    }
	
	
    /**
     * createDeployedDevicesKey - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
    **/
    public openapisdk.models.operations.CreateDeployedDevicesKeyResponse createDeployedDevicesKey(openapisdk.models.operations.CreateDeployedDevicesKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateDeployedDevicesKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Keys", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateDeployedDevicesKeyResponse res = new openapisdk.models.operations.CreateDeployedDevicesKeyResponse() {{
            previewDeployedDevicesFleetKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetKey.class);
                res.previewDeployedDevicesFleetKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * createHostedNumbersAuthorizationDocument - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
    **/
    public openapisdk.models.operations.CreateHostedNumbersAuthorizationDocumentResponse createHostedNumbersAuthorizationDocument(openapisdk.models.operations.CreateHostedNumbersAuthorizationDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateHostedNumbersAuthorizationDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/HostedNumbers/AuthorizationDocuments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateHostedNumbersAuthorizationDocumentResponse res = new openapisdk.models.operations.CreateHostedNumbersAuthorizationDocumentResponse() {{
            previewHostedNumbersAuthorizationDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument.class);
                res.previewHostedNumbersAuthorizationDocument = out;
            }
        }

        return res;
    }
	
	
    /**
     * createHostedNumbersHostedNumberOrder - Host a phone number's capability on Twilio's platform.
    **/
    public openapisdk.models.operations.CreateHostedNumbersHostedNumberOrderResponse createHostedNumbersHostedNumberOrder(openapisdk.models.operations.CreateHostedNumbersHostedNumberOrderRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateHostedNumbersHostedNumberOrderRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/HostedNumbers/HostedNumberOrders");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateHostedNumbersHostedNumberOrderResponse res = new openapisdk.models.operations.CreateHostedNumbersHostedNumberOrderResponse() {{
            previewHostedNumbersHostedNumberOrder = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder.class);
                res.previewHostedNumbersHostedNumberOrder = out;
            }
        }

        return res;
    }
	
	
    /**
     * createMarketplaceInstalledAddOn - Install an Add-on for the Account specified.
    **/
    public openapisdk.models.operations.CreateMarketplaceInstalledAddOnResponse createMarketplaceInstalledAddOn(openapisdk.models.operations.CreateMarketplaceInstalledAddOnRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateMarketplaceInstalledAddOnRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/InstalledAddOns");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateMarketplaceInstalledAddOnResponse res = new openapisdk.models.operations.CreateMarketplaceInstalledAddOnResponse() {{
            previewMarketplaceInstalledAddOn = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewMarketplaceInstalledAddOn out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewMarketplaceInstalledAddOn.class);
                res.previewMarketplaceInstalledAddOn = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateSyncDocumentResponse createSyncDocument(openapisdk.models.operations.CreateSyncDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSyncDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Documents", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSyncDocumentResponse res = new openapisdk.models.operations.CreateSyncDocumentResponse() {{
            previewSyncServiceDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceDocument.class);
                res.previewSyncServiceDocument = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateSyncServiceResponse createSyncService(openapisdk.models.operations.CreateSyncServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSyncServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSyncServiceResponse res = new openapisdk.models.operations.CreateSyncServiceResponse() {{
            previewSyncService = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncService out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncService.class);
                res.previewSyncService = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateSyncSyncListResponse createSyncSyncList(openapisdk.models.operations.CreateSyncSyncListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSyncSyncListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSyncSyncListResponse res = new openapisdk.models.operations.CreateSyncSyncListResponse() {{
            previewSyncServiceSyncList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncList.class);
                res.previewSyncServiceSyncList = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateSyncSyncListItemResponse createSyncSyncListItem(openapisdk.models.operations.CreateSyncSyncListItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSyncSyncListItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSyncSyncListItemResponse res = new openapisdk.models.operations.CreateSyncSyncListItemResponse() {{
            previewSyncServiceSyncListSyncListItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem.class);
                res.previewSyncServiceSyncListSyncListItem = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateSyncSyncMapResponse createSyncSyncMap(openapisdk.models.operations.CreateSyncSyncMapRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSyncSyncMapRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSyncSyncMapResponse res = new openapisdk.models.operations.CreateSyncSyncMapResponse() {{
            previewSyncServiceSyncMap = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncMap out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncMap.class);
                res.previewSyncServiceSyncMap = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateSyncSyncMapItemResponse createSyncSyncMapItem(openapisdk.models.operations.CreateSyncSyncMapItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSyncSyncMapItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSyncSyncMapItemResponse res = new openapisdk.models.operations.CreateSyncSyncMapItemResponse() {{
            previewSyncServiceSyncMapSyncMapItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem.class);
                res.previewSyncServiceSyncMapSyncMapItem = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateUnderstandAssistantResponse createUnderstandAssistant(openapisdk.models.operations.CreateUnderstandAssistantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUnderstandAssistantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUnderstandAssistantResponse res = new openapisdk.models.operations.CreateUnderstandAssistantResponse() {{
            previewUnderstandAssistant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistant.class);
                res.previewUnderstandAssistant = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateUnderstandFieldResponse createUnderstandField(openapisdk.models.operations.CreateUnderstandFieldRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUnderstandFieldRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUnderstandFieldResponse res = new openapisdk.models.operations.CreateUnderstandFieldResponse() {{
            previewUnderstandAssistantTaskField = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantTaskField out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantTaskField.class);
                res.previewUnderstandAssistantTaskField = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateUnderstandFieldTypeResponse createUnderstandFieldType(openapisdk.models.operations.CreateUnderstandFieldTypeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUnderstandFieldTypeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/FieldTypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUnderstandFieldTypeResponse res = new openapisdk.models.operations.CreateUnderstandFieldTypeResponse() {{
            previewUnderstandAssistantFieldType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantFieldType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantFieldType.class);
                res.previewUnderstandAssistantFieldType = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateUnderstandFieldValueResponse createUnderstandFieldValue(openapisdk.models.operations.CreateUnderstandFieldValueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUnderstandFieldValueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUnderstandFieldValueResponse res = new openapisdk.models.operations.CreateUnderstandFieldValueResponse() {{
            previewUnderstandAssistantFieldTypeFieldValue = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantFieldTypeFieldValue out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantFieldTypeFieldValue.class);
                res.previewUnderstandAssistantFieldTypeFieldValue = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateUnderstandModelBuildResponse createUnderstandModelBuild(openapisdk.models.operations.CreateUnderstandModelBuildRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUnderstandModelBuildRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/ModelBuilds", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUnderstandModelBuildResponse res = new openapisdk.models.operations.CreateUnderstandModelBuildResponse() {{
            previewUnderstandAssistantModelBuild = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantModelBuild out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantModelBuild.class);
                res.previewUnderstandAssistantModelBuild = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateUnderstandQueryResponse createUnderstandQuery(openapisdk.models.operations.CreateUnderstandQueryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUnderstandQueryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Queries", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUnderstandQueryResponse res = new openapisdk.models.operations.CreateUnderstandQueryResponse() {{
            previewUnderstandAssistantQuery = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantQuery out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantQuery.class);
                res.previewUnderstandAssistantQuery = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateUnderstandSampleResponse createUnderstandSample(openapisdk.models.operations.CreateUnderstandSampleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUnderstandSampleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUnderstandSampleResponse res = new openapisdk.models.operations.CreateUnderstandSampleResponse() {{
            previewUnderstandAssistantTaskSample = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantTaskSample out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantTaskSample.class);
                res.previewUnderstandAssistantTaskSample = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateUnderstandTaskResponse createUnderstandTask(openapisdk.models.operations.CreateUnderstandTaskRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUnderstandTaskRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUnderstandTaskResponse res = new openapisdk.models.operations.CreateUnderstandTaskResponse() {{
            previewUnderstandAssistantTask = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantTask out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantTask.class);
                res.previewUnderstandAssistantTask = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateWirelessCommandResponse createWirelessCommand(openapisdk.models.operations.CreateWirelessCommandRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateWirelessCommandRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/Commands");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateWirelessCommandResponse res = new openapisdk.models.operations.CreateWirelessCommandResponse() {{
            previewWirelessCommand = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewWirelessCommand out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewWirelessCommand.class);
                res.previewWirelessCommand = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateWirelessRatePlanResponse createWirelessRatePlan(openapisdk.models.operations.CreateWirelessRatePlanRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateWirelessRatePlanRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/RatePlans");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateWirelessRatePlanResponse res = new openapisdk.models.operations.CreateWirelessRatePlanResponse() {{
            previewWirelessRatePlan = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewWirelessRatePlan out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewWirelessRatePlan.class);
                res.previewWirelessRatePlan = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteDeployedDevicesCertificate - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
    **/
    public openapisdk.models.operations.DeleteDeployedDevicesCertificateResponse deleteDeployedDevicesCertificate(openapisdk.models.operations.DeleteDeployedDevicesCertificateRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteDeployedDevicesCertificateRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteDeployedDevicesCertificateResponse res = new openapisdk.models.operations.DeleteDeployedDevicesCertificateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteDeployedDevicesDeployment - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
    **/
    public openapisdk.models.operations.DeleteDeployedDevicesDeploymentResponse deleteDeployedDevicesDeployment(openapisdk.models.operations.DeleteDeployedDevicesDeploymentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteDeployedDevicesDeploymentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteDeployedDevicesDeploymentResponse res = new openapisdk.models.operations.DeleteDeployedDevicesDeploymentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteDeployedDevicesDevice - Delete a specific Device from the Fleet, also removing it from associated Deployments.
    **/
    public openapisdk.models.operations.DeleteDeployedDevicesDeviceResponse deleteDeployedDevicesDevice(openapisdk.models.operations.DeleteDeployedDevicesDeviceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteDeployedDevicesDeviceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteDeployedDevicesDeviceResponse res = new openapisdk.models.operations.DeleteDeployedDevicesDeviceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteDeployedDevicesFleet - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
    **/
    public openapisdk.models.operations.DeleteDeployedDevicesFleetResponse deleteDeployedDevicesFleet(openapisdk.models.operations.DeleteDeployedDevicesFleetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteDeployedDevicesFleetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteDeployedDevicesFleetResponse res = new openapisdk.models.operations.DeleteDeployedDevicesFleetResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteDeployedDevicesKey - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
    **/
    public openapisdk.models.operations.DeleteDeployedDevicesKeyResponse deleteDeployedDevicesKey(openapisdk.models.operations.DeleteDeployedDevicesKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteDeployedDevicesKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteDeployedDevicesKeyResponse res = new openapisdk.models.operations.DeleteDeployedDevicesKeyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteHostedNumbersHostedNumberOrder - Cancel the HostedNumberOrder (only available when the status is in `received`).
    **/
    public openapisdk.models.operations.DeleteHostedNumbersHostedNumberOrderResponse deleteHostedNumbersHostedNumberOrder(openapisdk.models.operations.DeleteHostedNumbersHostedNumberOrderRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteHostedNumbersHostedNumberOrderRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/HostedNumbers/HostedNumberOrders/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteHostedNumbersHostedNumberOrderResponse res = new openapisdk.models.operations.DeleteHostedNumbersHostedNumberOrderResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteMarketplaceInstalledAddOn - Remove an Add-on installation from your account
    **/
    public openapisdk.models.operations.DeleteMarketplaceInstalledAddOnResponse deleteMarketplaceInstalledAddOn(openapisdk.models.operations.DeleteMarketplaceInstalledAddOnRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteMarketplaceInstalledAddOnRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/InstalledAddOns/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteMarketplaceInstalledAddOnResponse res = new openapisdk.models.operations.DeleteMarketplaceInstalledAddOnResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSyncDocumentResponse deleteSyncDocument(openapisdk.models.operations.DeleteSyncDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Documents/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncDocumentResponse res = new openapisdk.models.operations.DeleteSyncDocumentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSyncDocumentPermission - Delete a specific Sync Document Permission.
    **/
    public openapisdk.models.operations.DeleteSyncDocumentPermissionResponse deleteSyncDocumentPermission(openapisdk.models.operations.DeleteSyncDocumentPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncDocumentPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncDocumentPermissionResponse res = new openapisdk.models.operations.DeleteSyncDocumentPermissionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSyncServiceResponse deleteSyncService(openapisdk.models.operations.DeleteSyncServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncServiceResponse res = new openapisdk.models.operations.DeleteSyncServiceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSyncSyncListResponse deleteSyncSyncList(openapisdk.models.operations.DeleteSyncSyncListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncSyncListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncSyncListResponse res = new openapisdk.models.operations.DeleteSyncSyncListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSyncSyncListItemResponse deleteSyncSyncListItem(openapisdk.models.operations.DeleteSyncSyncListItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncSyncListItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncSyncListItemResponse res = new openapisdk.models.operations.DeleteSyncSyncListItemResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSyncSyncListPermission - Delete a specific Sync List Permission.
    **/
    public openapisdk.models.operations.DeleteSyncSyncListPermissionResponse deleteSyncSyncListPermission(openapisdk.models.operations.DeleteSyncSyncListPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncSyncListPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncSyncListPermissionResponse res = new openapisdk.models.operations.DeleteSyncSyncListPermissionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSyncSyncMapResponse deleteSyncSyncMap(openapisdk.models.operations.DeleteSyncSyncMapRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncSyncMapRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncSyncMapResponse res = new openapisdk.models.operations.DeleteSyncSyncMapResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSyncSyncMapItemResponse deleteSyncSyncMapItem(openapisdk.models.operations.DeleteSyncSyncMapItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncSyncMapItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncSyncMapItemResponse res = new openapisdk.models.operations.DeleteSyncSyncMapItemResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSyncSyncMapPermission - Delete a specific Sync Map Permission.
    **/
    public openapisdk.models.operations.DeleteSyncSyncMapPermissionResponse deleteSyncSyncMapPermission(openapisdk.models.operations.DeleteSyncSyncMapPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncSyncMapPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncSyncMapPermissionResponse res = new openapisdk.models.operations.DeleteSyncSyncMapPermissionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteUnderstandAssistantResponse deleteUnderstandAssistant(openapisdk.models.operations.DeleteUnderstandAssistantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUnderstandAssistantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUnderstandAssistantResponse res = new openapisdk.models.operations.DeleteUnderstandAssistantResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteUnderstandFieldResponse deleteUnderstandField(openapisdk.models.operations.DeleteUnderstandFieldRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUnderstandFieldRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUnderstandFieldResponse res = new openapisdk.models.operations.DeleteUnderstandFieldResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteUnderstandFieldTypeResponse deleteUnderstandFieldType(openapisdk.models.operations.DeleteUnderstandFieldTypeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUnderstandFieldTypeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUnderstandFieldTypeResponse res = new openapisdk.models.operations.DeleteUnderstandFieldTypeResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteUnderstandFieldValueResponse deleteUnderstandFieldValue(openapisdk.models.operations.DeleteUnderstandFieldValueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUnderstandFieldValueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUnderstandFieldValueResponse res = new openapisdk.models.operations.DeleteUnderstandFieldValueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteUnderstandModelBuildResponse deleteUnderstandModelBuild(openapisdk.models.operations.DeleteUnderstandModelBuildRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUnderstandModelBuildRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUnderstandModelBuildResponse res = new openapisdk.models.operations.DeleteUnderstandModelBuildResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteUnderstandQueryResponse deleteUnderstandQuery(openapisdk.models.operations.DeleteUnderstandQueryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUnderstandQueryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUnderstandQueryResponse res = new openapisdk.models.operations.DeleteUnderstandQueryResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteUnderstandSampleResponse deleteUnderstandSample(openapisdk.models.operations.DeleteUnderstandSampleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUnderstandSampleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUnderstandSampleResponse res = new openapisdk.models.operations.DeleteUnderstandSampleResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteUnderstandTaskResponse deleteUnderstandTask(openapisdk.models.operations.DeleteUnderstandTaskRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUnderstandTaskRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUnderstandTaskResponse res = new openapisdk.models.operations.DeleteUnderstandTaskResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteWirelessRatePlanResponse deleteWirelessRatePlan(openapisdk.models.operations.DeleteWirelessRatePlanRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteWirelessRatePlanRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/RatePlans/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteWirelessRatePlanResponse res = new openapisdk.models.operations.DeleteWirelessRatePlanResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * fetchDeployedDevicesCertificate - Fetch information about a specific Certificate credential in the Fleet.
    **/
    public openapisdk.models.operations.FetchDeployedDevicesCertificateResponse fetchDeployedDevicesCertificate(openapisdk.models.operations.FetchDeployedDevicesCertificateRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchDeployedDevicesCertificateRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchDeployedDevicesCertificateResponse res = new openapisdk.models.operations.FetchDeployedDevicesCertificateResponse() {{
            previewDeployedDevicesFleetCertificate = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate.class);
                res.previewDeployedDevicesFleetCertificate = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchDeployedDevicesDeployment - Fetch information about a specific Deployment in the Fleet.
    **/
    public openapisdk.models.operations.FetchDeployedDevicesDeploymentResponse fetchDeployedDevicesDeployment(openapisdk.models.operations.FetchDeployedDevicesDeploymentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchDeployedDevicesDeploymentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchDeployedDevicesDeploymentResponse res = new openapisdk.models.operations.FetchDeployedDevicesDeploymentResponse() {{
            previewDeployedDevicesFleetDeployment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment.class);
                res.previewDeployedDevicesFleetDeployment = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchDeployedDevicesDevice - Fetch information about a specific Device in the Fleet.
    **/
    public openapisdk.models.operations.FetchDeployedDevicesDeviceResponse fetchDeployedDevicesDevice(openapisdk.models.operations.FetchDeployedDevicesDeviceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchDeployedDevicesDeviceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchDeployedDevicesDeviceResponse res = new openapisdk.models.operations.FetchDeployedDevicesDeviceResponse() {{
            previewDeployedDevicesFleetDevice = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetDevice out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetDevice.class);
                res.previewDeployedDevicesFleetDevice = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchDeployedDevicesFleet - Fetch information about a specific Fleet in your account.
    **/
    public openapisdk.models.operations.FetchDeployedDevicesFleetResponse fetchDeployedDevicesFleet(openapisdk.models.operations.FetchDeployedDevicesFleetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchDeployedDevicesFleetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchDeployedDevicesFleetResponse res = new openapisdk.models.operations.FetchDeployedDevicesFleetResponse() {{
            previewDeployedDevicesFleet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleet.class);
                res.previewDeployedDevicesFleet = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchDeployedDevicesKey - Fetch information about a specific Key credential in the Fleet.
    **/
    public openapisdk.models.operations.FetchDeployedDevicesKeyResponse fetchDeployedDevicesKey(openapisdk.models.operations.FetchDeployedDevicesKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchDeployedDevicesKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchDeployedDevicesKeyResponse res = new openapisdk.models.operations.FetchDeployedDevicesKeyResponse() {{
            previewDeployedDevicesFleetKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetKey.class);
                res.previewDeployedDevicesFleetKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchHostedNumbersAuthorizationDocument - Fetch a specific AuthorizationDocument.
    **/
    public openapisdk.models.operations.FetchHostedNumbersAuthorizationDocumentResponse fetchHostedNumbersAuthorizationDocument(openapisdk.models.operations.FetchHostedNumbersAuthorizationDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchHostedNumbersAuthorizationDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/HostedNumbers/AuthorizationDocuments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchHostedNumbersAuthorizationDocumentResponse res = new openapisdk.models.operations.FetchHostedNumbersAuthorizationDocumentResponse() {{
            previewHostedNumbersAuthorizationDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument.class);
                res.previewHostedNumbersAuthorizationDocument = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchHostedNumbersHostedNumberOrder - Fetch a specific HostedNumberOrder.
    **/
    public openapisdk.models.operations.FetchHostedNumbersHostedNumberOrderResponse fetchHostedNumbersHostedNumberOrder(openapisdk.models.operations.FetchHostedNumbersHostedNumberOrderRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchHostedNumbersHostedNumberOrderRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/HostedNumbers/HostedNumberOrders/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchHostedNumbersHostedNumberOrderResponse res = new openapisdk.models.operations.FetchHostedNumbersHostedNumberOrderResponse() {{
            previewHostedNumbersHostedNumberOrder = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder.class);
                res.previewHostedNumbersHostedNumberOrder = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchMarketplaceAvailableAddOn - Fetch an instance of an Add-on currently available to be installed.
    **/
    public openapisdk.models.operations.FetchMarketplaceAvailableAddOnResponse fetchMarketplaceAvailableAddOn(openapisdk.models.operations.FetchMarketplaceAvailableAddOnRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMarketplaceAvailableAddOnRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/AvailableAddOns/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMarketplaceAvailableAddOnResponse res = new openapisdk.models.operations.FetchMarketplaceAvailableAddOnResponse() {{
            previewMarketplaceAvailableAddOn = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewMarketplaceAvailableAddOn out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewMarketplaceAvailableAddOn.class);
                res.previewMarketplaceAvailableAddOn = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchMarketplaceAvailableAddOnExtension - Fetch an instance of an Extension for the Available Add-on.
    **/
    public openapisdk.models.operations.FetchMarketplaceAvailableAddOnExtensionResponse fetchMarketplaceAvailableAddOnExtension(openapisdk.models.operations.FetchMarketplaceAvailableAddOnExtensionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMarketplaceAvailableAddOnExtensionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMarketplaceAvailableAddOnExtensionResponse res = new openapisdk.models.operations.FetchMarketplaceAvailableAddOnExtensionResponse() {{
            previewMarketplaceAvailableAddOnAvailableAddOnExtension = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension.class);
                res.previewMarketplaceAvailableAddOnAvailableAddOnExtension = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchMarketplaceInstalledAddOn - Fetch an instance of an Add-on currently installed on this Account.
    **/
    public openapisdk.models.operations.FetchMarketplaceInstalledAddOnResponse fetchMarketplaceInstalledAddOn(openapisdk.models.operations.FetchMarketplaceInstalledAddOnRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMarketplaceInstalledAddOnRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/InstalledAddOns/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMarketplaceInstalledAddOnResponse res = new openapisdk.models.operations.FetchMarketplaceInstalledAddOnResponse() {{
            previewMarketplaceInstalledAddOn = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewMarketplaceInstalledAddOn out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewMarketplaceInstalledAddOn.class);
                res.previewMarketplaceInstalledAddOn = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchMarketplaceInstalledAddOnExtension - Fetch an instance of an Extension for the Installed Add-on.
    **/
    public openapisdk.models.operations.FetchMarketplaceInstalledAddOnExtensionResponse fetchMarketplaceInstalledAddOnExtension(openapisdk.models.operations.FetchMarketplaceInstalledAddOnExtensionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMarketplaceInstalledAddOnExtensionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMarketplaceInstalledAddOnExtensionResponse res = new openapisdk.models.operations.FetchMarketplaceInstalledAddOnExtensionResponse() {{
            previewMarketplaceInstalledAddOnInstalledAddOnExtension = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension.class);
                res.previewMarketplaceInstalledAddOnInstalledAddOnExtension = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSyncDocumentResponse fetchSyncDocument(openapisdk.models.operations.FetchSyncDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Documents/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncDocumentResponse res = new openapisdk.models.operations.FetchSyncDocumentResponse() {{
            previewSyncServiceDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceDocument.class);
                res.previewSyncServiceDocument = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSyncDocumentPermission - Fetch a specific Sync Document Permission.
    **/
    public openapisdk.models.operations.FetchSyncDocumentPermissionResponse fetchSyncDocumentPermission(openapisdk.models.operations.FetchSyncDocumentPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncDocumentPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncDocumentPermissionResponse res = new openapisdk.models.operations.FetchSyncDocumentPermissionResponse() {{
            previewSyncServiceDocumentDocumentPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceDocumentDocumentPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceDocumentDocumentPermission.class);
                res.previewSyncServiceDocumentDocumentPermission = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSyncServiceResponse fetchSyncService(openapisdk.models.operations.FetchSyncServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncServiceResponse res = new openapisdk.models.operations.FetchSyncServiceResponse() {{
            previewSyncService = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncService out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncService.class);
                res.previewSyncService = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSyncSyncListResponse fetchSyncSyncList(openapisdk.models.operations.FetchSyncSyncListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncSyncListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncSyncListResponse res = new openapisdk.models.operations.FetchSyncSyncListResponse() {{
            previewSyncServiceSyncList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncList.class);
                res.previewSyncServiceSyncList = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSyncSyncListItemResponse fetchSyncSyncListItem(openapisdk.models.operations.FetchSyncSyncListItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncSyncListItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncSyncListItemResponse res = new openapisdk.models.operations.FetchSyncSyncListItemResponse() {{
            previewSyncServiceSyncListSyncListItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem.class);
                res.previewSyncServiceSyncListSyncListItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSyncSyncListPermission - Fetch a specific Sync List Permission.
    **/
    public openapisdk.models.operations.FetchSyncSyncListPermissionResponse fetchSyncSyncListPermission(openapisdk.models.operations.FetchSyncSyncListPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncSyncListPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncSyncListPermissionResponse res = new openapisdk.models.operations.FetchSyncSyncListPermissionResponse() {{
            previewSyncServiceSyncListSyncListPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncListSyncListPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncListSyncListPermission.class);
                res.previewSyncServiceSyncListSyncListPermission = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSyncSyncMapResponse fetchSyncSyncMap(openapisdk.models.operations.FetchSyncSyncMapRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncSyncMapRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncSyncMapResponse res = new openapisdk.models.operations.FetchSyncSyncMapResponse() {{
            previewSyncServiceSyncMap = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncMap out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncMap.class);
                res.previewSyncServiceSyncMap = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSyncSyncMapItemResponse fetchSyncSyncMapItem(openapisdk.models.operations.FetchSyncSyncMapItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncSyncMapItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncSyncMapItemResponse res = new openapisdk.models.operations.FetchSyncSyncMapItemResponse() {{
            previewSyncServiceSyncMapSyncMapItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem.class);
                res.previewSyncServiceSyncMapSyncMapItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSyncSyncMapPermission - Fetch a specific Sync Map Permission.
    **/
    public openapisdk.models.operations.FetchSyncSyncMapPermissionResponse fetchSyncSyncMapPermission(openapisdk.models.operations.FetchSyncSyncMapPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncSyncMapPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncSyncMapPermissionResponse res = new openapisdk.models.operations.FetchSyncSyncMapPermissionResponse() {{
            previewSyncServiceSyncMapSyncMapPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapPermission.class);
                res.previewSyncServiceSyncMapSyncMapPermission = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandAssistantResponse fetchUnderstandAssistant(openapisdk.models.operations.FetchUnderstandAssistantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandAssistantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandAssistantResponse res = new openapisdk.models.operations.FetchUnderstandAssistantResponse() {{
            previewUnderstandAssistant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistant.class);
                res.previewUnderstandAssistant = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandAssistantFallbackActionsResponse fetchUnderstandAssistantFallbackActions(openapisdk.models.operations.FetchUnderstandAssistantFallbackActionsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandAssistantFallbackActionsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/FallbackActions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandAssistantFallbackActionsResponse res = new openapisdk.models.operations.FetchUnderstandAssistantFallbackActionsResponse() {{
            previewUnderstandAssistantAssistantFallbackActions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantAssistantFallbackActions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantAssistantFallbackActions.class);
                res.previewUnderstandAssistantAssistantFallbackActions = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandAssistantInitiationActionsResponse fetchUnderstandAssistantInitiationActions(openapisdk.models.operations.FetchUnderstandAssistantInitiationActionsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandAssistantInitiationActionsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/InitiationActions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandAssistantInitiationActionsResponse res = new openapisdk.models.operations.FetchUnderstandAssistantInitiationActionsResponse() {{
            previewUnderstandAssistantAssistantInitiationActions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantAssistantInitiationActions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantAssistantInitiationActions.class);
                res.previewUnderstandAssistantAssistantInitiationActions = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandDialogueResponse fetchUnderstandDialogue(openapisdk.models.operations.FetchUnderstandDialogueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandDialogueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Dialogues/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandDialogueResponse res = new openapisdk.models.operations.FetchUnderstandDialogueResponse() {{
            previewUnderstandAssistantDialogue = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantDialogue out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantDialogue.class);
                res.previewUnderstandAssistantDialogue = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandFieldResponse fetchUnderstandField(openapisdk.models.operations.FetchUnderstandFieldRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandFieldRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandFieldResponse res = new openapisdk.models.operations.FetchUnderstandFieldResponse() {{
            previewUnderstandAssistantTaskField = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantTaskField out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantTaskField.class);
                res.previewUnderstandAssistantTaskField = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandFieldTypeResponse fetchUnderstandFieldType(openapisdk.models.operations.FetchUnderstandFieldTypeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandFieldTypeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandFieldTypeResponse res = new openapisdk.models.operations.FetchUnderstandFieldTypeResponse() {{
            previewUnderstandAssistantFieldType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantFieldType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantFieldType.class);
                res.previewUnderstandAssistantFieldType = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandFieldValueResponse fetchUnderstandFieldValue(openapisdk.models.operations.FetchUnderstandFieldValueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandFieldValueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandFieldValueResponse res = new openapisdk.models.operations.FetchUnderstandFieldValueResponse() {{
            previewUnderstandAssistantFieldTypeFieldValue = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantFieldTypeFieldValue out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantFieldTypeFieldValue.class);
                res.previewUnderstandAssistantFieldTypeFieldValue = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandModelBuildResponse fetchUnderstandModelBuild(openapisdk.models.operations.FetchUnderstandModelBuildRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandModelBuildRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandModelBuildResponse res = new openapisdk.models.operations.FetchUnderstandModelBuildResponse() {{
            previewUnderstandAssistantModelBuild = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantModelBuild out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantModelBuild.class);
                res.previewUnderstandAssistantModelBuild = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandQueryResponse fetchUnderstandQuery(openapisdk.models.operations.FetchUnderstandQueryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandQueryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandQueryResponse res = new openapisdk.models.operations.FetchUnderstandQueryResponse() {{
            previewUnderstandAssistantQuery = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantQuery out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantQuery.class);
                res.previewUnderstandAssistantQuery = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandSampleResponse fetchUnderstandSample(openapisdk.models.operations.FetchUnderstandSampleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandSampleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandSampleResponse res = new openapisdk.models.operations.FetchUnderstandSampleResponse() {{
            previewUnderstandAssistantTaskSample = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantTaskSample out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantTaskSample.class);
                res.previewUnderstandAssistantTaskSample = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchUnderstandStyleSheet - Returns Style sheet JSON object for this Assistant
    **/
    public openapisdk.models.operations.FetchUnderstandStyleSheetResponse fetchUnderstandStyleSheet(openapisdk.models.operations.FetchUnderstandStyleSheetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandStyleSheetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/StyleSheet", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandStyleSheetResponse res = new openapisdk.models.operations.FetchUnderstandStyleSheetResponse() {{
            previewUnderstandAssistantStyleSheet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantStyleSheet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantStyleSheet.class);
                res.previewUnderstandAssistantStyleSheet = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandTaskResponse fetchUnderstandTask(openapisdk.models.operations.FetchUnderstandTaskRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandTaskRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandTaskResponse res = new openapisdk.models.operations.FetchUnderstandTaskResponse() {{
            previewUnderstandAssistantTask = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantTask out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantTask.class);
                res.previewUnderstandAssistantTask = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchUnderstandTaskActions - Returns JSON actions for this Task.
    **/
    public openapisdk.models.operations.FetchUnderstandTaskActionsResponse fetchUnderstandTaskActions(openapisdk.models.operations.FetchUnderstandTaskActionsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandTaskActionsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandTaskActionsResponse res = new openapisdk.models.operations.FetchUnderstandTaskActionsResponse() {{
            previewUnderstandAssistantTaskTaskActions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskActions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskActions.class);
                res.previewUnderstandAssistantTaskTaskActions = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUnderstandTaskStatisticsResponse fetchUnderstandTaskStatistics(openapisdk.models.operations.FetchUnderstandTaskStatisticsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUnderstandTaskStatisticsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Statistics", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUnderstandTaskStatisticsResponse res = new openapisdk.models.operations.FetchUnderstandTaskStatisticsResponse() {{
            previewUnderstandAssistantTaskTaskStatistics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskStatistics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskStatistics.class);
                res.previewUnderstandAssistantTaskTaskStatistics = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWirelessCommandResponse fetchWirelessCommand(openapisdk.models.operations.FetchWirelessCommandRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWirelessCommandRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/Commands/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchWirelessCommandResponse res = new openapisdk.models.operations.FetchWirelessCommandResponse() {{
            previewWirelessCommand = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewWirelessCommand out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewWirelessCommand.class);
                res.previewWirelessCommand = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWirelessRatePlanResponse fetchWirelessRatePlan(openapisdk.models.operations.FetchWirelessRatePlanRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWirelessRatePlanRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/RatePlans/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchWirelessRatePlanResponse res = new openapisdk.models.operations.FetchWirelessRatePlanResponse() {{
            previewWirelessRatePlan = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewWirelessRatePlan out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewWirelessRatePlan.class);
                res.previewWirelessRatePlan = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWirelessSimResponse fetchWirelessSim(openapisdk.models.operations.FetchWirelessSimRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWirelessSimRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/Sims/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchWirelessSimResponse res = new openapisdk.models.operations.FetchWirelessSimResponse() {{
            previewWirelessSim = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewWirelessSim out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewWirelessSim.class);
                res.previewWirelessSim = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchWirelessUsageResponse fetchWirelessUsage(openapisdk.models.operations.FetchWirelessUsageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWirelessUsageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/Sims/{SimSid}/Usage", request.pathParams);
        
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

        openapisdk.models.operations.FetchWirelessUsageResponse res = new openapisdk.models.operations.FetchWirelessUsageResponse() {{
            previewWirelessSimUsage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewWirelessSimUsage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewWirelessSimUsage.class);
                res.previewWirelessSimUsage = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDeployedDevicesCertificate - Retrieve a list of all Certificate credentials belonging to the Fleet.
    **/
    public openapisdk.models.operations.ListDeployedDevicesCertificateResponse listDeployedDevicesCertificate(openapisdk.models.operations.ListDeployedDevicesCertificateRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListDeployedDevicesCertificateRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Certificates", request.pathParams);
        
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

        openapisdk.models.operations.ListDeployedDevicesCertificateResponse res = new openapisdk.models.operations.ListDeployedDevicesCertificateResponse() {{
            listDeployedDevicesCertificateResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDeployedDevicesCertificateListDeployedDevicesCertificateResponse.class);
                res.listDeployedDevicesCertificateResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDeployedDevicesDeployment - Retrieve a list of all Deployments belonging to the Fleet.
    **/
    public openapisdk.models.operations.ListDeployedDevicesDeploymentResponse listDeployedDevicesDeployment(openapisdk.models.operations.ListDeployedDevicesDeploymentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListDeployedDevicesDeploymentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Deployments", request.pathParams);
        
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

        openapisdk.models.operations.ListDeployedDevicesDeploymentResponse res = new openapisdk.models.operations.ListDeployedDevicesDeploymentResponse() {{
            listDeployedDevicesDeploymentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDeployedDevicesDeploymentListDeployedDevicesDeploymentResponse.class);
                res.listDeployedDevicesDeploymentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDeployedDevicesDevice - Retrieve a list of all Devices belonging to the Fleet.
    **/
    public openapisdk.models.operations.ListDeployedDevicesDeviceResponse listDeployedDevicesDevice(openapisdk.models.operations.ListDeployedDevicesDeviceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListDeployedDevicesDeviceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Devices", request.pathParams);
        
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

        openapisdk.models.operations.ListDeployedDevicesDeviceResponse res = new openapisdk.models.operations.ListDeployedDevicesDeviceResponse() {{
            listDeployedDevicesDeviceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDeployedDevicesDeviceListDeployedDevicesDeviceResponse.class);
                res.listDeployedDevicesDeviceResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDeployedDevicesFleet - Retrieve a list of all Fleets belonging to your account.
    **/
    public openapisdk.models.operations.ListDeployedDevicesFleetResponse listDeployedDevicesFleet(openapisdk.models.operations.ListDeployedDevicesFleetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListDeployedDevicesFleetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets");
        
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

        openapisdk.models.operations.ListDeployedDevicesFleetResponse res = new openapisdk.models.operations.ListDeployedDevicesFleetResponse() {{
            listDeployedDevicesFleetResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDeployedDevicesFleetListDeployedDevicesFleetResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDeployedDevicesFleetListDeployedDevicesFleetResponse.class);
                res.listDeployedDevicesFleetResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDeployedDevicesKey - Retrieve a list of all Keys credentials belonging to the Fleet.
    **/
    public openapisdk.models.operations.ListDeployedDevicesKeyResponse listDeployedDevicesKey(openapisdk.models.operations.ListDeployedDevicesKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListDeployedDevicesKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Keys", request.pathParams);
        
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

        openapisdk.models.operations.ListDeployedDevicesKeyResponse res = new openapisdk.models.operations.ListDeployedDevicesKeyResponse() {{
            listDeployedDevicesKeyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDeployedDevicesKeyListDeployedDevicesKeyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDeployedDevicesKeyListDeployedDevicesKeyResponse.class);
                res.listDeployedDevicesKeyResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listHostedNumbersAuthorizationDocument - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
    **/
    public openapisdk.models.operations.ListHostedNumbersAuthorizationDocumentResponse listHostedNumbersAuthorizationDocument(openapisdk.models.operations.ListHostedNumbersAuthorizationDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListHostedNumbersAuthorizationDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/HostedNumbers/AuthorizationDocuments");
        
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

        openapisdk.models.operations.ListHostedNumbersAuthorizationDocumentResponse res = new openapisdk.models.operations.ListHostedNumbersAuthorizationDocumentResponse() {{
            listHostedNumbersAuthorizationDocumentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse.class);
                res.listHostedNumbersAuthorizationDocumentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listHostedNumbersDependentHostedNumberOrder - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
    **/
    public openapisdk.models.operations.ListHostedNumbersDependentHostedNumberOrderResponse listHostedNumbersDependentHostedNumberOrder(openapisdk.models.operations.ListHostedNumbersDependentHostedNumberOrderRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListHostedNumbersDependentHostedNumberOrderRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/HostedNumbers/AuthorizationDocuments/{SigningDocumentSid}/DependentHostedNumberOrders", request.pathParams);
        
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

        openapisdk.models.operations.ListHostedNumbersDependentHostedNumberOrderResponse res = new openapisdk.models.operations.ListHostedNumbersDependentHostedNumberOrderResponse() {{
            listHostedNumbersDependentHostedNumberOrderResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListHostedNumbersDependentHostedNumberOrderListHostedNumbersDependentHostedNumberOrderResponse.class);
                res.listHostedNumbersDependentHostedNumberOrderResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listHostedNumbersHostedNumberOrder - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
    **/
    public openapisdk.models.operations.ListHostedNumbersHostedNumberOrderResponse listHostedNumbersHostedNumberOrder(openapisdk.models.operations.ListHostedNumbersHostedNumberOrderRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListHostedNumbersHostedNumberOrderRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/HostedNumbers/HostedNumberOrders");
        
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

        openapisdk.models.operations.ListHostedNumbersHostedNumberOrderResponse res = new openapisdk.models.operations.ListHostedNumbersHostedNumberOrderResponse() {{
            listHostedNumbersHostedNumberOrderResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListHostedNumbersHostedNumberOrderListHostedNumbersHostedNumberOrderResponse.class);
                res.listHostedNumbersHostedNumberOrderResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listMarketplaceAvailableAddOn - Retrieve a list of Add-ons currently available to be installed.
    **/
    public openapisdk.models.operations.ListMarketplaceAvailableAddOnResponse listMarketplaceAvailableAddOn(openapisdk.models.operations.ListMarketplaceAvailableAddOnRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMarketplaceAvailableAddOnRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/AvailableAddOns");
        
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

        openapisdk.models.operations.ListMarketplaceAvailableAddOnResponse res = new openapisdk.models.operations.ListMarketplaceAvailableAddOnResponse() {{
            listMarketplaceAvailableAddOnResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListMarketplaceAvailableAddOnListMarketplaceAvailableAddOnResponse.class);
                res.listMarketplaceAvailableAddOnResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listMarketplaceAvailableAddOnExtension - Retrieve a list of Extensions for the Available Add-on.
    **/
    public openapisdk.models.operations.ListMarketplaceAvailableAddOnExtensionResponse listMarketplaceAvailableAddOnExtension(openapisdk.models.operations.ListMarketplaceAvailableAddOnExtensionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMarketplaceAvailableAddOnExtensionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/AvailableAddOns/{AvailableAddOnSid}/Extensions", request.pathParams);
        
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

        openapisdk.models.operations.ListMarketplaceAvailableAddOnExtensionResponse res = new openapisdk.models.operations.ListMarketplaceAvailableAddOnExtensionResponse() {{
            listMarketplaceAvailableAddOnExtensionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse.class);
                res.listMarketplaceAvailableAddOnExtensionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listMarketplaceInstalledAddOn - Retrieve a list of Add-ons currently installed on this Account.
    **/
    public openapisdk.models.operations.ListMarketplaceInstalledAddOnResponse listMarketplaceInstalledAddOn(openapisdk.models.operations.ListMarketplaceInstalledAddOnRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMarketplaceInstalledAddOnRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/InstalledAddOns");
        
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

        openapisdk.models.operations.ListMarketplaceInstalledAddOnResponse res = new openapisdk.models.operations.ListMarketplaceInstalledAddOnResponse() {{
            listMarketplaceInstalledAddOnResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListMarketplaceInstalledAddOnListMarketplaceInstalledAddOnResponse.class);
                res.listMarketplaceInstalledAddOnResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listMarketplaceInstalledAddOnExtension - Retrieve a list of Extensions for the Installed Add-on.
    **/
    public openapisdk.models.operations.ListMarketplaceInstalledAddOnExtensionResponse listMarketplaceInstalledAddOnExtension(openapisdk.models.operations.ListMarketplaceInstalledAddOnExtensionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMarketplaceInstalledAddOnExtensionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions", request.pathParams);
        
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

        openapisdk.models.operations.ListMarketplaceInstalledAddOnExtensionResponse res = new openapisdk.models.operations.ListMarketplaceInstalledAddOnExtensionResponse() {{
            listMarketplaceInstalledAddOnExtensionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse.class);
                res.listMarketplaceInstalledAddOnExtensionResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSyncDocumentResponse listSyncDocument(openapisdk.models.operations.ListSyncDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Documents", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncDocumentResponse res = new openapisdk.models.operations.ListSyncDocumentResponse() {{
            listSyncDocumentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncDocumentListSyncDocumentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncDocumentListSyncDocumentResponse.class);
                res.listSyncDocumentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSyncDocumentPermission - Retrieve a list of all Permissions applying to a Sync Document.
    **/
    public openapisdk.models.operations.ListSyncDocumentPermissionResponse listSyncDocumentPermission(openapisdk.models.operations.ListSyncDocumentPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncDocumentPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncDocumentPermissionResponse res = new openapisdk.models.operations.ListSyncDocumentPermissionResponse() {{
            listSyncDocumentPermissionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncDocumentPermissionListSyncDocumentPermissionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncDocumentPermissionListSyncDocumentPermissionResponse.class);
                res.listSyncDocumentPermissionResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSyncServiceResponse listSyncService(openapisdk.models.operations.ListSyncServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services");
        
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

        openapisdk.models.operations.ListSyncServiceResponse res = new openapisdk.models.operations.ListSyncServiceResponse() {{
            listSyncServiceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncServiceListSyncServiceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncServiceListSyncServiceResponse.class);
                res.listSyncServiceResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSyncSyncListResponse listSyncSyncList(openapisdk.models.operations.ListSyncSyncListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncSyncListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncSyncListResponse res = new openapisdk.models.operations.ListSyncSyncListResponse() {{
            listSyncSyncListResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncSyncListListSyncSyncListResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncSyncListListSyncSyncListResponse.class);
                res.listSyncSyncListResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSyncSyncListItemResponse listSyncSyncListItem(openapisdk.models.operations.ListSyncSyncListItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncSyncListItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncSyncListItemResponse res = new openapisdk.models.operations.ListSyncSyncListItemResponse() {{
            listSyncSyncListItemResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncSyncListItemListSyncSyncListItemResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncSyncListItemListSyncSyncListItemResponse.class);
                res.listSyncSyncListItemResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSyncSyncListPermission - Retrieve a list of all Permissions applying to a Sync List.
    **/
    public openapisdk.models.operations.ListSyncSyncListPermissionResponse listSyncSyncListPermission(openapisdk.models.operations.ListSyncSyncListPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncSyncListPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncSyncListPermissionResponse res = new openapisdk.models.operations.ListSyncSyncListPermissionResponse() {{
            listSyncSyncListPermissionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncSyncListPermissionListSyncSyncListPermissionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncSyncListPermissionListSyncSyncListPermissionResponse.class);
                res.listSyncSyncListPermissionResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSyncSyncMapResponse listSyncSyncMap(openapisdk.models.operations.ListSyncSyncMapRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncSyncMapRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncSyncMapResponse res = new openapisdk.models.operations.ListSyncSyncMapResponse() {{
            listSyncSyncMapResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncSyncMapListSyncSyncMapResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncSyncMapListSyncSyncMapResponse.class);
                res.listSyncSyncMapResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSyncSyncMapItemResponse listSyncSyncMapItem(openapisdk.models.operations.ListSyncSyncMapItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncSyncMapItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncSyncMapItemResponse res = new openapisdk.models.operations.ListSyncSyncMapItemResponse() {{
            listSyncSyncMapItemResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncSyncMapItemListSyncSyncMapItemResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncSyncMapItemListSyncSyncMapItemResponse.class);
                res.listSyncSyncMapItemResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSyncSyncMapPermission - Retrieve a list of all Permissions applying to a Sync Map.
    **/
    public openapisdk.models.operations.ListSyncSyncMapPermissionResponse listSyncSyncMapPermission(openapisdk.models.operations.ListSyncSyncMapPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncSyncMapPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncSyncMapPermissionResponse res = new openapisdk.models.operations.ListSyncSyncMapPermissionResponse() {{
            listSyncSyncMapPermissionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncSyncMapPermissionListSyncSyncMapPermissionResponse.class);
                res.listSyncSyncMapPermissionResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUnderstandAssistantResponse listUnderstandAssistant(openapisdk.models.operations.ListUnderstandAssistantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUnderstandAssistantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants");
        
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

        openapisdk.models.operations.ListUnderstandAssistantResponse res = new openapisdk.models.operations.ListUnderstandAssistantResponse() {{
            listUnderstandAssistantResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUnderstandAssistantListUnderstandAssistantResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUnderstandAssistantListUnderstandAssistantResponse.class);
                res.listUnderstandAssistantResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUnderstandFieldResponse listUnderstandField(openapisdk.models.operations.ListUnderstandFieldRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUnderstandFieldRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Fields", request.pathParams);
        
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

        openapisdk.models.operations.ListUnderstandFieldResponse res = new openapisdk.models.operations.ListUnderstandFieldResponse() {{
            listUnderstandFieldResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUnderstandFieldListUnderstandFieldResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUnderstandFieldListUnderstandFieldResponse.class);
                res.listUnderstandFieldResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUnderstandFieldTypeResponse listUnderstandFieldType(openapisdk.models.operations.ListUnderstandFieldTypeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUnderstandFieldTypeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/FieldTypes", request.pathParams);
        
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

        openapisdk.models.operations.ListUnderstandFieldTypeResponse res = new openapisdk.models.operations.ListUnderstandFieldTypeResponse() {{
            listUnderstandFieldTypeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUnderstandFieldTypeListUnderstandFieldTypeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUnderstandFieldTypeListUnderstandFieldTypeResponse.class);
                res.listUnderstandFieldTypeResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUnderstandFieldValueResponse listUnderstandFieldValue(openapisdk.models.operations.ListUnderstandFieldValueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUnderstandFieldValueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/FieldTypes/{FieldTypeSid}/FieldValues", request.pathParams);
        
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

        openapisdk.models.operations.ListUnderstandFieldValueResponse res = new openapisdk.models.operations.ListUnderstandFieldValueResponse() {{
            listUnderstandFieldValueResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUnderstandFieldValueListUnderstandFieldValueResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUnderstandFieldValueListUnderstandFieldValueResponse.class);
                res.listUnderstandFieldValueResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUnderstandModelBuildResponse listUnderstandModelBuild(openapisdk.models.operations.ListUnderstandModelBuildRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUnderstandModelBuildRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/ModelBuilds", request.pathParams);
        
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

        openapisdk.models.operations.ListUnderstandModelBuildResponse res = new openapisdk.models.operations.ListUnderstandModelBuildResponse() {{
            listUnderstandModelBuildResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUnderstandModelBuildListUnderstandModelBuildResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUnderstandModelBuildListUnderstandModelBuildResponse.class);
                res.listUnderstandModelBuildResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUnderstandQueryResponse listUnderstandQuery(openapisdk.models.operations.ListUnderstandQueryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUnderstandQueryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Queries", request.pathParams);
        
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

        openapisdk.models.operations.ListUnderstandQueryResponse res = new openapisdk.models.operations.ListUnderstandQueryResponse() {{
            listUnderstandQueryResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUnderstandQueryListUnderstandQueryResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUnderstandQueryListUnderstandQueryResponse.class);
                res.listUnderstandQueryResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUnderstandSampleResponse listUnderstandSample(openapisdk.models.operations.ListUnderstandSampleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUnderstandSampleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples", request.pathParams);
        
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

        openapisdk.models.operations.ListUnderstandSampleResponse res = new openapisdk.models.operations.ListUnderstandSampleResponse() {{
            listUnderstandSampleResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUnderstandSampleListUnderstandSampleResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUnderstandSampleListUnderstandSampleResponse.class);
                res.listUnderstandSampleResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUnderstandTaskResponse listUnderstandTask(openapisdk.models.operations.ListUnderstandTaskRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUnderstandTaskRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks", request.pathParams);
        
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

        openapisdk.models.operations.ListUnderstandTaskResponse res = new openapisdk.models.operations.ListUnderstandTaskResponse() {{
            listUnderstandTaskResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUnderstandTaskListUnderstandTaskResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUnderstandTaskListUnderstandTaskResponse.class);
                res.listUnderstandTaskResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListWirelessCommandResponse listWirelessCommand(openapisdk.models.operations.ListWirelessCommandRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListWirelessCommandRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/Commands");
        
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

        openapisdk.models.operations.ListWirelessCommandResponse res = new openapisdk.models.operations.ListWirelessCommandResponse() {{
            listWirelessCommandResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListWirelessCommandListWirelessCommandResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListWirelessCommandListWirelessCommandResponse.class);
                res.listWirelessCommandResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListWirelessRatePlanResponse listWirelessRatePlan(openapisdk.models.operations.ListWirelessRatePlanRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListWirelessRatePlanRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/RatePlans");
        
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

        openapisdk.models.operations.ListWirelessRatePlanResponse res = new openapisdk.models.operations.ListWirelessRatePlanResponse() {{
            listWirelessRatePlanResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListWirelessRatePlanListWirelessRatePlanResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListWirelessRatePlanListWirelessRatePlanResponse.class);
                res.listWirelessRatePlanResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListWirelessSimResponse listWirelessSim(openapisdk.models.operations.ListWirelessSimRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListWirelessSimRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/Sims");
        
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

        openapisdk.models.operations.ListWirelessSimResponse res = new openapisdk.models.operations.ListWirelessSimResponse() {{
            listWirelessSimResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListWirelessSimListWirelessSimResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListWirelessSimListWirelessSimResponse.class);
                res.listWirelessSimResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeployedDevicesCertificate - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
    **/
    public openapisdk.models.operations.UpdateDeployedDevicesCertificateResponse updateDeployedDevicesCertificate(openapisdk.models.operations.UpdateDeployedDevicesCertificateRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateDeployedDevicesCertificateRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Certificates/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeployedDevicesCertificateResponse res = new openapisdk.models.operations.UpdateDeployedDevicesCertificateResponse() {{
            previewDeployedDevicesFleetCertificate = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate.class);
                res.previewDeployedDevicesFleetCertificate = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeployedDevicesDeployment - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
    **/
    public openapisdk.models.operations.UpdateDeployedDevicesDeploymentResponse updateDeployedDevicesDeployment(openapisdk.models.operations.UpdateDeployedDevicesDeploymentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateDeployedDevicesDeploymentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Deployments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeployedDevicesDeploymentResponse res = new openapisdk.models.operations.UpdateDeployedDevicesDeploymentResponse() {{
            previewDeployedDevicesFleetDeployment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment.class);
                res.previewDeployedDevicesFleetDeployment = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeployedDevicesDevice - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
    **/
    public openapisdk.models.operations.UpdateDeployedDevicesDeviceResponse updateDeployedDevicesDevice(openapisdk.models.operations.UpdateDeployedDevicesDeviceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateDeployedDevicesDeviceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Devices/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeployedDevicesDeviceResponse res = new openapisdk.models.operations.UpdateDeployedDevicesDeviceResponse() {{
            previewDeployedDevicesFleetDevice = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetDevice out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetDevice.class);
                res.previewDeployedDevicesFleetDevice = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeployedDevicesFleet - Update the friendly name property of a specific Fleet in your account.
    **/
    public openapisdk.models.operations.UpdateDeployedDevicesFleetResponse updateDeployedDevicesFleet(openapisdk.models.operations.UpdateDeployedDevicesFleetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateDeployedDevicesFleetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeployedDevicesFleetResponse res = new openapisdk.models.operations.UpdateDeployedDevicesFleetResponse() {{
            previewDeployedDevicesFleet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleet.class);
                res.previewDeployedDevicesFleet = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeployedDevicesKey - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
    **/
    public openapisdk.models.operations.UpdateDeployedDevicesKeyResponse updateDeployedDevicesKey(openapisdk.models.operations.UpdateDeployedDevicesKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateDeployedDevicesKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/DeployedDevices/Fleets/{FleetSid}/Keys/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeployedDevicesKeyResponse res = new openapisdk.models.operations.UpdateDeployedDevicesKeyResponse() {{
            previewDeployedDevicesFleetKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewDeployedDevicesFleetKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewDeployedDevicesFleetKey.class);
                res.previewDeployedDevicesFleetKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateHostedNumbersAuthorizationDocument - Updates a specific AuthorizationDocument.
    **/
    public openapisdk.models.operations.UpdateHostedNumbersAuthorizationDocumentResponse updateHostedNumbersAuthorizationDocument(openapisdk.models.operations.UpdateHostedNumbersAuthorizationDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateHostedNumbersAuthorizationDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/HostedNumbers/AuthorizationDocuments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateHostedNumbersAuthorizationDocumentResponse res = new openapisdk.models.operations.UpdateHostedNumbersAuthorizationDocumentResponse() {{
            previewHostedNumbersAuthorizationDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument.class);
                res.previewHostedNumbersAuthorizationDocument = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateHostedNumbersHostedNumberOrder - Updates a specific HostedNumberOrder.
    **/
    public openapisdk.models.operations.UpdateHostedNumbersHostedNumberOrderResponse updateHostedNumbersHostedNumberOrder(openapisdk.models.operations.UpdateHostedNumbersHostedNumberOrderRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateHostedNumbersHostedNumberOrderRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/HostedNumbers/HostedNumberOrders/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateHostedNumbersHostedNumberOrderResponse res = new openapisdk.models.operations.UpdateHostedNumbersHostedNumberOrderResponse() {{
            previewHostedNumbersHostedNumberOrder = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewHostedNumbersHostedNumberOrder.class);
                res.previewHostedNumbersHostedNumberOrder = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateMarketplaceInstalledAddOn - Update an Add-on installation for the Account specified.
    **/
    public openapisdk.models.operations.UpdateMarketplaceInstalledAddOnResponse updateMarketplaceInstalledAddOn(openapisdk.models.operations.UpdateMarketplaceInstalledAddOnRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateMarketplaceInstalledAddOnRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/InstalledAddOns/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateMarketplaceInstalledAddOnResponse res = new openapisdk.models.operations.UpdateMarketplaceInstalledAddOnResponse() {{
            previewMarketplaceInstalledAddOn = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewMarketplaceInstalledAddOn out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewMarketplaceInstalledAddOn.class);
                res.previewMarketplaceInstalledAddOn = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateMarketplaceInstalledAddOnExtension - Update an Extension for an Add-on installation.
    **/
    public openapisdk.models.operations.UpdateMarketplaceInstalledAddOnExtensionResponse updateMarketplaceInstalledAddOnExtension(openapisdk.models.operations.UpdateMarketplaceInstalledAddOnExtensionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateMarketplaceInstalledAddOnExtensionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/marketplace/InstalledAddOns/{InstalledAddOnSid}/Extensions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateMarketplaceInstalledAddOnExtensionResponse res = new openapisdk.models.operations.UpdateMarketplaceInstalledAddOnExtensionResponse() {{
            previewMarketplaceInstalledAddOnInstalledAddOnExtension = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension.class);
                res.previewMarketplaceInstalledAddOnInstalledAddOnExtension = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateSyncDocumentResponse updateSyncDocument(openapisdk.models.operations.UpdateSyncDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Documents/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncDocumentResponse res = new openapisdk.models.operations.UpdateSyncDocumentResponse() {{
            previewSyncServiceDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceDocument.class);
                res.previewSyncServiceDocument = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSyncDocumentPermission - Update an identity's access to a specific Sync Document.
    **/
    public openapisdk.models.operations.UpdateSyncDocumentPermissionResponse updateSyncDocumentPermission(openapisdk.models.operations.UpdateSyncDocumentPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncDocumentPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncDocumentPermissionResponse res = new openapisdk.models.operations.UpdateSyncDocumentPermissionResponse() {{
            previewSyncServiceDocumentDocumentPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceDocumentDocumentPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceDocumentDocumentPermission.class);
                res.previewSyncServiceDocumentDocumentPermission = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateSyncServiceResponse updateSyncService(openapisdk.models.operations.UpdateSyncServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncServiceResponse res = new openapisdk.models.operations.UpdateSyncServiceResponse() {{
            previewSyncService = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncService out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncService.class);
                res.previewSyncService = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateSyncSyncListItemResponse updateSyncSyncListItem(openapisdk.models.operations.UpdateSyncSyncListItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncSyncListItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncSyncListItemResponse res = new openapisdk.models.operations.UpdateSyncSyncListItemResponse() {{
            previewSyncServiceSyncListSyncListItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncListSyncListItem.class);
                res.previewSyncServiceSyncListSyncListItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSyncSyncListPermission - Update an identity's access to a specific Sync List.
    **/
    public openapisdk.models.operations.UpdateSyncSyncListPermissionResponse updateSyncSyncListPermission(openapisdk.models.operations.UpdateSyncSyncListPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncSyncListPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncSyncListPermissionResponse res = new openapisdk.models.operations.UpdateSyncSyncListPermissionResponse() {{
            previewSyncServiceSyncListSyncListPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncListSyncListPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncListSyncListPermission.class);
                res.previewSyncServiceSyncListSyncListPermission = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateSyncSyncMapItemResponse updateSyncSyncMapItem(openapisdk.models.operations.UpdateSyncSyncMapItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncSyncMapItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncSyncMapItemResponse res = new openapisdk.models.operations.UpdateSyncSyncMapItemResponse() {{
            previewSyncServiceSyncMapSyncMapItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapItem.class);
                res.previewSyncServiceSyncMapSyncMapItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSyncSyncMapPermission - Update an identity's access to a specific Sync Map.
    **/
    public openapisdk.models.operations.UpdateSyncSyncMapPermissionResponse updateSyncSyncMapPermission(openapisdk.models.operations.UpdateSyncSyncMapPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncSyncMapPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/Sync/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncSyncMapPermissionResponse res = new openapisdk.models.operations.UpdateSyncSyncMapPermissionResponse() {{
            previewSyncServiceSyncMapSyncMapPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapPermission.class);
                res.previewSyncServiceSyncMapSyncMapPermission = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateUnderstandAssistantResponse updateUnderstandAssistant(openapisdk.models.operations.UpdateUnderstandAssistantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUnderstandAssistantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUnderstandAssistantResponse res = new openapisdk.models.operations.UpdateUnderstandAssistantResponse() {{
            previewUnderstandAssistant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistant.class);
                res.previewUnderstandAssistant = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateUnderstandAssistantFallbackActionsResponse updateUnderstandAssistantFallbackActions(openapisdk.models.operations.UpdateUnderstandAssistantFallbackActionsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUnderstandAssistantFallbackActionsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/FallbackActions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUnderstandAssistantFallbackActionsResponse res = new openapisdk.models.operations.UpdateUnderstandAssistantFallbackActionsResponse() {{
            previewUnderstandAssistantAssistantFallbackActions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantAssistantFallbackActions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantAssistantFallbackActions.class);
                res.previewUnderstandAssistantAssistantFallbackActions = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateUnderstandAssistantInitiationActionsResponse updateUnderstandAssistantInitiationActions(openapisdk.models.operations.UpdateUnderstandAssistantInitiationActionsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUnderstandAssistantInitiationActionsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/InitiationActions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUnderstandAssistantInitiationActionsResponse res = new openapisdk.models.operations.UpdateUnderstandAssistantInitiationActionsResponse() {{
            previewUnderstandAssistantAssistantInitiationActions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantAssistantInitiationActions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantAssistantInitiationActions.class);
                res.previewUnderstandAssistantAssistantInitiationActions = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateUnderstandFieldTypeResponse updateUnderstandFieldType(openapisdk.models.operations.UpdateUnderstandFieldTypeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUnderstandFieldTypeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/FieldTypes/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUnderstandFieldTypeResponse res = new openapisdk.models.operations.UpdateUnderstandFieldTypeResponse() {{
            previewUnderstandAssistantFieldType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantFieldType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantFieldType.class);
                res.previewUnderstandAssistantFieldType = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateUnderstandModelBuildResponse updateUnderstandModelBuild(openapisdk.models.operations.UpdateUnderstandModelBuildRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUnderstandModelBuildRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/ModelBuilds/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUnderstandModelBuildResponse res = new openapisdk.models.operations.UpdateUnderstandModelBuildResponse() {{
            previewUnderstandAssistantModelBuild = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantModelBuild out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantModelBuild.class);
                res.previewUnderstandAssistantModelBuild = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateUnderstandQueryResponse updateUnderstandQuery(openapisdk.models.operations.UpdateUnderstandQueryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUnderstandQueryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Queries/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUnderstandQueryResponse res = new openapisdk.models.operations.UpdateUnderstandQueryResponse() {{
            previewUnderstandAssistantQuery = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantQuery out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantQuery.class);
                res.previewUnderstandAssistantQuery = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateUnderstandSampleResponse updateUnderstandSample(openapisdk.models.operations.UpdateUnderstandSampleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUnderstandSampleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Samples/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUnderstandSampleResponse res = new openapisdk.models.operations.UpdateUnderstandSampleResponse() {{
            previewUnderstandAssistantTaskSample = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantTaskSample out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantTaskSample.class);
                res.previewUnderstandAssistantTaskSample = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateUnderstandStyleSheet - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
    **/
    public openapisdk.models.operations.UpdateUnderstandStyleSheetResponse updateUnderstandStyleSheet(openapisdk.models.operations.UpdateUnderstandStyleSheetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUnderstandStyleSheetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/StyleSheet", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUnderstandStyleSheetResponse res = new openapisdk.models.operations.UpdateUnderstandStyleSheetResponse() {{
            previewUnderstandAssistantStyleSheet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantStyleSheet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantStyleSheet.class);
                res.previewUnderstandAssistantStyleSheet = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateUnderstandTaskResponse updateUnderstandTask(openapisdk.models.operations.UpdateUnderstandTaskRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUnderstandTaskRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUnderstandTaskResponse res = new openapisdk.models.operations.UpdateUnderstandTaskResponse() {{
            previewUnderstandAssistantTask = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantTask out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantTask.class);
                res.previewUnderstandAssistantTask = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateUnderstandTaskActions - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
    **/
    public openapisdk.models.operations.UpdateUnderstandTaskActionsResponse updateUnderstandTaskActions(openapisdk.models.operations.UpdateUnderstandTaskActionsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUnderstandTaskActionsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/understand/Assistants/{AssistantSid}/Tasks/{TaskSid}/Actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUnderstandTaskActionsResponse res = new openapisdk.models.operations.UpdateUnderstandTaskActionsResponse() {{
            previewUnderstandAssistantTaskTaskActions = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskActions out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewUnderstandAssistantTaskTaskActions.class);
                res.previewUnderstandAssistantTaskTaskActions = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateWirelessRatePlanResponse updateWirelessRatePlan(openapisdk.models.operations.UpdateWirelessRatePlanRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateWirelessRatePlanRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/RatePlans/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateWirelessRatePlanResponse res = new openapisdk.models.operations.UpdateWirelessRatePlanResponse() {{
            previewWirelessRatePlan = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewWirelessRatePlan out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewWirelessRatePlan.class);
                res.previewWirelessRatePlan = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateWirelessSimResponse updateWirelessSim(openapisdk.models.operations.UpdateWirelessSimRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateWirelessSimRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/wireless/Sims/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateWirelessSimResponse res = new openapisdk.models.operations.UpdateWirelessSimResponse() {{
            previewWirelessSim = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PreviewWirelessSim out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PreviewWirelessSim.class);
                res.previewWirelessSim = out;
            }
        }

        return res;
    }
	
}