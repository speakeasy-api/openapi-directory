package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Assistant {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Assistant(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * accessibility - Accessibility
     *
     * This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.  
     * Sending an empty-body POST request returns the current values.  
     * Either of the fields or both can be sent and new values will be saved.
    **/
    public openapisdk.models.operations.AccessibilityResponse accessibility(openapisdk.models.operations.AccessibilityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assistant/a11y_mode");
        
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

        openapisdk.models.operations.AccessibilityResponse res = new openapisdk.models.operations.AccessibilityResponse() {{
            getcurrentvalues = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Getcurrentvalues out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Getcurrentvalues.class);
                res.getcurrentvalues = out;
            }
        }

        return res;
    }
	
	
    /**
     * alarmVolume - Alarm Volume
     *
     * This gets and sets alarms and timers volume.  
     * **Note:** This is not the same as normal volume.
     * 
     * Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.  
     * Sending an empty body gets the volume. Sending `volume` sets the volume.
    **/
    public openapisdk.models.operations.AlarmVolumeResponse alarmVolume(openapisdk.models.operations.AlarmVolumeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assistant/alarms/volume");
        
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

        openapisdk.models.operations.AlarmVolumeResponse res = new openapisdk.models.operations.AlarmVolumeResponse() {{
            getvolume = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Getvolume out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Getvolume.class);
                res.getvolume = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteAlarmsandTimers - Delete Alarms and Timers
     *
     * This deletes alarms and timers by their id.
     * 
     * `ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.
    **/
    public openapisdk.models.operations.DeleteAlarmsandTimersResponse deleteAlarmsandTimers(openapisdk.models.operations.DeleteAlarmsandTimersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assistant/alarms/delete");
        
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

        openapisdk.models.operations.DeleteAlarmsandTimersResponse res = new openapisdk.models.operations.DeleteAlarmsandTimersResponse() {{
            example19 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Example19 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Example19.class);
                res.example19 = out;
            }
        }

        return res;
    }
	
	
    /**
     * doNotDisturb - Do Not Disturb
     *
     * This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.
    **/
    public openapisdk.models.operations.DoNotDisturbResponse doNotDisturb(openapisdk.models.operations.DoNotDisturbRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assistant/notifications");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DoNotDisturbResponse res = new openapisdk.models.operations.DoNotDisturbResponse() {{
            getcurrentstate = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Getcurrentstate out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Getcurrentstate.class);
                res.getcurrentstate = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAlarmsandTimers - Get Alarms and Timers
     *
     * This gives a list of all active alarms and timers.
     * 
     * Both alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).
     * 
     * Alarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).  
     * `status` is 1 for set up and 2 for ringing.
     * 
     * Timers have `original_duration` is the original duration.  
     * `status` is 1 for set up and 3 for ringing.
    **/
    public openapisdk.models.operations.GetAlarmsandTimersResponse getAlarmsandTimers() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/assistant/alarms");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAlarmsandTimersResponse res = new openapisdk.models.operations.GetAlarmsandTimersResponse() {{
            example18 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Example18 out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Example18.class);
                res.example18 = out;
            }
        }

        return res;
    }
	
	
    /**
     * setEqualizerValues - Set Equalizer Values
     *
     * This can only set new equalizer values. To get already set values, use /setup/eureka_info.
     * 
     * The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.
     * 
     * `low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.
     * 
     * Default values are 0 for both.  
     * While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.
    **/
    public openapisdk.models.operations.SetEqualizerValuesResponse setEqualizerValues(openapisdk.models.operations.SetEqualizerValuesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/user_eq/set_equalizer");
        
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

        openapisdk.models.operations.SetEqualizerValuesResponse res = new openapisdk.models.operations.SetEqualizerValuesResponse() {{
            setEqualizerValues200TextPlainObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.setEqualizerValues200TextPlainObject = out;
            }
        }

        return res;
    }
	
}