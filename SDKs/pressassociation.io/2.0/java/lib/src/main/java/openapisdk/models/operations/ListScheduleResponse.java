package openapisdk.models.operations;



public class ListScheduleResponse {
    public String contentType;
    public ListScheduleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListScheduleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> listSchedule200ApplicationJSONObject;
    public ListScheduleResponse withListSchedule200ApplicationJsonObject(java.util.Map<String, Object> listSchedule200ApplicationJSONObject) {
        this.listSchedule200ApplicationJSONObject = listSchedule200ApplicationJSONObject;
        return this;
    }
}