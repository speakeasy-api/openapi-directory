package openapisdk.models.operations;



public class DfareportingTargetingTemplatesUpdateResponse {
    public String contentType;
    public DfareportingTargetingTemplatesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingTargetingTemplatesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TargetingTemplate targetingTemplate;
    public DfareportingTargetingTemplatesUpdateResponse withTargetingTemplate(openapisdk.models.shared.TargetingTemplate targetingTemplate) {
        this.targetingTemplate = targetingTemplate;
        return this;
    }
}