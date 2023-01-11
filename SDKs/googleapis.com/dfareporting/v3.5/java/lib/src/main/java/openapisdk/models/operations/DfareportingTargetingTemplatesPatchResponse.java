package openapisdk.models.operations;



public class DfareportingTargetingTemplatesPatchResponse {
    public String contentType;
    public DfareportingTargetingTemplatesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingTargetingTemplatesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TargetingTemplate targetingTemplate;
    public DfareportingTargetingTemplatesPatchResponse withTargetingTemplate(openapisdk.models.shared.TargetingTemplate targetingTemplate) {
        this.targetingTemplate = targetingTemplate;
        return this;
    }
}