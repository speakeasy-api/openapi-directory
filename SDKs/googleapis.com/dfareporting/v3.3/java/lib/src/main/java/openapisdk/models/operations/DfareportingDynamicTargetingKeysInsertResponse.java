package openapisdk.models.operations;



public class DfareportingDynamicTargetingKeysInsertResponse {
    public String contentType;
    public DfareportingDynamicTargetingKeysInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DynamicTargetingKey dynamicTargetingKey;
    public DfareportingDynamicTargetingKeysInsertResponse withDynamicTargetingKey(openapisdk.models.shared.DynamicTargetingKey dynamicTargetingKey) {
        this.dynamicTargetingKey = dynamicTargetingKey;
        return this;
    }
    public Long statusCode;
    public DfareportingDynamicTargetingKeysInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}