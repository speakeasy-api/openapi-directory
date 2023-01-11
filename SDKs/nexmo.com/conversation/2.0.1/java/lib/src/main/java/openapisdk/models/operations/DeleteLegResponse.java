package openapisdk.models.operations;



public class DeleteLegResponse {
    public String contentType;
    public DeleteLegResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteLegResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deleteLeg200ApplicationJSONObject;
    public DeleteLegResponse withDeleteLeg200ApplicationJsonObject(java.util.Map<String, Object> deleteLeg200ApplicationJSONObject) {
        this.deleteLeg200ApplicationJSONObject = deleteLeg200ApplicationJSONObject;
        return this;
    }
}