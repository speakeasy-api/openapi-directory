package openapisdk.models.operations;



public class GetOrganizationActionBatchesResponse {
    public String contentType;
    public GetOrganizationActionBatchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetOrganizationActionBatchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getOrganizationActionBatches200ApplicationJSONObject;
    public GetOrganizationActionBatchesResponse withGetOrganizationActionBatches200ApplicationJsonObject(java.util.Map<String, Object> getOrganizationActionBatches200ApplicationJSONObject) {
        this.getOrganizationActionBatches200ApplicationJSONObject = getOrganizationActionBatches200ApplicationJSONObject;
        return this;
    }
}