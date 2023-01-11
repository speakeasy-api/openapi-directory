package openapisdk.models.operations;



public class DfareportingTargetingTemplatesListResponse {
    public String contentType;
    public DfareportingTargetingTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingTargetingTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TargetingTemplatesListResponse targetingTemplatesListResponse;
    public DfareportingTargetingTemplatesListResponse withTargetingTemplatesListResponse(openapisdk.models.shared.TargetingTemplatesListResponse targetingTemplatesListResponse) {
        this.targetingTemplatesListResponse = targetingTemplatesListResponse;
        return this;
    }
}