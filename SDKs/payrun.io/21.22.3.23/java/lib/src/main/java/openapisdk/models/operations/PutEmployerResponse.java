package openapisdk.models.operations;



public class PutEmployerResponse {
    public String contentType;
    public PutEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employer employer;
    public PutEmployerResponse withEmployer(openapisdk.models.shared.Employer employer) {
        this.employer = employer;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public PutEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public PutEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}