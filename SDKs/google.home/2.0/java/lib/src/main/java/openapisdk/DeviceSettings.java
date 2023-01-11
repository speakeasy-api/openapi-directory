package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class DeviceSettings {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public DeviceSettings(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * nightModesettings - Night Mode settings
     *
     * This sets night mode options.  
     * To view currently set values, use /setup/eureka_info.  
     * If `enabled` is set to false, night mode is disabled and the other values do not matter.  
     * `led_brightness` and `volume` refer to the maximum LED Brightness and Volume that is set during night mode.  
     * `demo_to_user` is always set to `true` so change in values will be visible in realtime (like brightness).  
     * `windows`: A combination of `length_hours` and `start_hour` is used to define start and end times for night mode. In this example, night mode starts at 10 PM (22) and ends at 6 AM (8 hours later). `windows.days` is an array of days of week when night mode will be enabled. Example: 0->Sunday, 1-> Monday, ..., 6->Saturday.
    **/
    public openapisdk.models.operations.NightModesettingsResponse nightModesettings(openapisdk.models.operations.NightModesettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assistant/set_night_mode_params");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.NightModesettingsResponse res = new openapisdk.models.operations.NightModesettingsResponse() {{
            example17 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Example17 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Example17.class);
                res.example17 = out;
            }
        }

        return res;
    }
	
	
    /**
     * rebootandFactoryReset - Reboot and Factory Reset
     *
     * This can simply reboot the device (`params: "now"`) or factory reset the device (`params: "fdr"`).
    **/
    public openapisdk.models.operations.RebootandFactoryResetResponse rebootandFactoryReset(openapisdk.models.operations.RebootandFactoryResetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/reboot");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RebootandFactoryResetResponse res = new openapisdk.models.operations.RebootandFactoryResetResponse() {{
            rebootandFactoryReset200TextPlainObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.rebootandFactoryReset200TextPlainObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * setEurekaInfo - Set Eureka Info
     *
     * This can set custom values to some options.
     * 
     * Only fields to be modified need to be sent, not all. The example has some modifiable fields.
     * 
     * TODO: List all modifiable fields.
     * 
     * Sending non-existant fields will still return a 200 OK, but they are not saved.
    **/
    public openapisdk.models.operations.SetEurekaInfoResponse setEurekaInfo(openapisdk.models.operations.SetEurekaInfoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/set_eureka_info");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SetEurekaInfoResponse res = new openapisdk.models.operations.SetEurekaInfoResponse() {{
            setEurekaInfo200TextPlainObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.setEurekaInfo200TextPlainObject = out;
            }
        }

        return res;
    }
	
}