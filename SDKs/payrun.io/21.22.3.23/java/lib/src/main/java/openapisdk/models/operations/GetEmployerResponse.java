package openapisdk.models.operations;



public class GetEmployerResponse {
    public String contentType;
    public GetEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employer employer;
    public GetEmployerResponse withEmployer(openapisdk.models.shared.Employer employer) {
        this.employer = employer;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployerResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}