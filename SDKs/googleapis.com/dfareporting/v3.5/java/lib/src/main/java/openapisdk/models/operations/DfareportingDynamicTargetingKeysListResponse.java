package openapisdk.models.operations;



public class DfareportingDynamicTargetingKeysListResponse {
    public String contentType;
    public DfareportingDynamicTargetingKeysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DynamicTargetingKeysListResponse dynamicTargetingKeysListResponse;
    public DfareportingDynamicTargetingKeysListResponse withDynamicTargetingKeysListResponse(openapisdk.models.shared.DynamicTargetingKeysListResponse dynamicTargetingKeysListResponse) {
        this.dynamicTargetingKeysListResponse = dynamicTargetingKeysListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingDynamicTargetingKeysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}