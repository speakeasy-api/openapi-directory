package openapisdk.models.operations;



public class DfareportingTargetingTemplatesGetResponse {
    public String contentType;
    public DfareportingTargetingTemplatesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingTargetingTemplatesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TargetingTemplate targetingTemplate;
    public DfareportingTargetingTemplatesGetResponse withTargetingTemplate(openapisdk.models.shared.TargetingTemplate targetingTemplate) {
        this.targetingTemplate = targetingTemplate;
        return this;
    }
}