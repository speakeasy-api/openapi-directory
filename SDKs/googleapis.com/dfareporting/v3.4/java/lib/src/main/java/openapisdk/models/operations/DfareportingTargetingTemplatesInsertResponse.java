package openapisdk.models.operations;



public class DfareportingTargetingTemplatesInsertResponse {
    public String contentType;
    public DfareportingTargetingTemplatesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingTargetingTemplatesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TargetingTemplate targetingTemplate;
    public DfareportingTargetingTemplatesInsertResponse withTargetingTemplate(openapisdk.models.shared.TargetingTemplate targetingTemplate) {
        this.targetingTemplate = targetingTemplate;
        return this;
    }
}