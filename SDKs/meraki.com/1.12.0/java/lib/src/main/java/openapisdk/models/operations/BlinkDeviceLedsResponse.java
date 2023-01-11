package openapisdk.models.operations;



public class BlinkDeviceLedsResponse {
    public String contentType;
    public BlinkDeviceLedsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BlinkDeviceLedsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> blinkDeviceLeds202ApplicationJSONObject;
    public BlinkDeviceLedsResponse withBlinkDeviceLeds202ApplicationJsonObject(java.util.Map<String, Object> blinkDeviceLeds202ApplicationJSONObject) {
        this.blinkDeviceLeds202ApplicationJSONObject = blinkDeviceLeds202ApplicationJSONObject;
        return this;
    }
}