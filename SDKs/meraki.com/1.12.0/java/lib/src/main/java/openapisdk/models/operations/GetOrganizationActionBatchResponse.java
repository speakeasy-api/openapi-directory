package openapisdk.models.operations;



public class GetOrganizationActionBatchResponse {
    public String contentType;
    public GetOrganizationActionBatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationActionBatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationActionBatch200ApplicationJSONObject;
    public GetOrganizationActionBatchResponse withGetOrganizationActionBatch200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationActionBatch200ApplicationJSONObject) {
        this.getOrganizationActionBatch200ApplicationJSONObject = getOrganizationActionBatch200ApplicationJSONObject;
        return this;
    }
}