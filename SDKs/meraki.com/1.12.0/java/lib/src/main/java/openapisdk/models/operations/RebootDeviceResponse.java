package openapisdk.models.operations;



public class RebootDeviceResponse {
    public String contentType;
    public RebootDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RebootDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> rebootDevice202ApplicationJSONObject;
    public RebootDeviceResponse withRebootDevice202ApplicationJsonObject(java.util.Map<String, Object> rebootDevice202ApplicationJSONObject) {
        this.rebootDevice202ApplicationJSONObject = rebootDevice202ApplicationJSONObject;
        return this;
    }
}