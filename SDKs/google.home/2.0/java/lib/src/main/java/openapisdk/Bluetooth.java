package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Bluetooth {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Bluetooth(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * changeDiscoverability - Change Discoverability
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     * 
     * **For Part 1 only**
     * 
     * This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).
    **/
    public openapisdk.models.operations.ChangeDiscoverabilityResponse changeDiscoverability(openapisdk.models.operations.ChangeDiscoverabilityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bluetooth/discovery");
        
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

        openapisdk.models.operations.ChangeDiscoverabilityResponse res = new openapisdk.models.operations.ChangeDiscoverabilityResponse() {{
            changeDiscoverability200TextPlainObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.changeDiscoverability200TextPlainObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * forgetpaireddevice - Forget paired device
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     * 
     * **For both parts**
     * 
     * This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).
    **/
    public openapisdk.models.operations.ForgetpaireddeviceResponse forgetpaireddevice(openapisdk.models.operations.ForgetpaireddeviceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bluetooth/bond");
        
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

        openapisdk.models.operations.ForgetpaireddeviceResponse res = new openapisdk.models.operations.ForgetpaireddeviceResponse() {{
            forgetpaireddevice200TextPlainObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.forgetpaireddevice200TextPlainObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPairedDevices - Get Paired Devices
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     * 
     * **For both parts**
     * 
     * This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.
    **/
    public openapisdk.models.operations.GetPairedDevicesResponse getPairedDevices() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bluetooth/get_bonded");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPairedDevicesResponse res = new openapisdk.models.operations.GetPairedDevicesResponse() {{
            example111s = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Example111[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Example111[].class);
                res.example111s = out;
            }
        }

        return res;
    }
	
	
    /**
     * getScanResults - Get Scan Results
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     * 
     * **For Part 2 only**
     * 
     * This returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.
     * 
     * `rssi` is signal strength, `name` is name, `mac_address` is mac address.  
     * `device_class` and `device_type` are bluetooth codes.  
     * 
     * The Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.
    **/
    public openapisdk.models.operations.GetScanResultsResponse getScanResults() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bluetooth/scan_results");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetScanResultsResponse res = new openapisdk.models.operations.GetScanResultsResponse() {{
            example112s = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Example112[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Example112[].class);
                res.example112s = out;
            }
        }

        return res;
    }
	
	
    /**
     * pairwithSpeaker - Pair with Speaker
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     * 
     * **For Part 2 only**
     * 
     * This pairs with other bluetooth speakers by mac address.
    **/
    public openapisdk.models.operations.PairwithSpeakerResponse pairwithSpeaker(openapisdk.models.operations.PairwithSpeakerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bluetooth/connect");
        
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

        openapisdk.models.operations.PairwithSpeakerResponse res = new openapisdk.models.operations.PairwithSpeakerResponse() {{
            pairwithSpeaker200TextPlainObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.pairwithSpeaker200TextPlainObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * scanfordevices - Scan for devices
     *
     * *See note for Bluetooth under `/setup/bluetooth/status`*
     * 
     * **For Part 2 only**
     * 
     * This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.  
     * To get the scan results, see /setup/bluetooth/scan_results.
    **/
    public openapisdk.models.operations.ScanfordevicesResponse scanfordevices(openapisdk.models.operations.ScanfordevicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bluetooth/scan");
        
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

        openapisdk.models.operations.ScanfordevicesResponse res = new openapisdk.models.operations.ScanfordevicesResponse() {{
            scanfordevices200TextPlainObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.scanfordevices200TextPlainObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * status - Status
     *
     * > **There are 2 parts of Bluetooth.**
     * >
     * > *Part 1*: Devices like phones connect to Home and play audio through Home.  
     * > For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.
     * >
     * > *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.
     * > For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.
     * >
     * > The other endpoints are common for both parts.
     * 
     * 
     * **For both parts**
     * 
     * This gives the status of all bluetooth things.
     * - Not sure what `audio_mode` is.
     * - `discovery_enabled` states whether Home is discoverable. (**Part 1**)
     * - `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)
     * - `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)
     * - `connected_devices` is a list of all speakers connected to Home. (**Part 2**)
    **/
    public openapisdk.models.operations.StatusResponse status() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/bluetooth/status");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.StatusResponse res = new openapisdk.models.operations.StatusResponse() {{
            example110 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Example110 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Example110.class);
                res.example110 = out;
            }
        }

        return res;
    }
	
}