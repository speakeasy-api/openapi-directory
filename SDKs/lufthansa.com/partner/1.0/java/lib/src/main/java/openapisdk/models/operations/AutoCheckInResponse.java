package openapisdk.models.operations;



public class AutoCheckInResponse {
    public String autoCheckIn200ApplicationJSONString;
    public AutoCheckInResponse withAutoCheckIn200ApplicationJsonString(String autoCheckIn200ApplicationJSONString) {
        this.autoCheckIn200ApplicationJSONString = autoCheckIn200ApplicationJSONString;
        return this;
    }
    public String contentType;
    public AutoCheckInResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AutoCheckInResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}