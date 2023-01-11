package openapisdk.models.operations;



public class PatchEmployerResponse {
    public String contentType;
    public PatchEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employer employer;
    public PatchEmployerResponse withEmployer(openapisdk.models.shared.Employer employer) {
        this.employer = employer;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PatchEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PatchEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}