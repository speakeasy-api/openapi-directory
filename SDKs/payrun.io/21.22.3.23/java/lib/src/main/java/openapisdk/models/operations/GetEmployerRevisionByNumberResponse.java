package openapisdk.models.operations;



public class GetEmployerRevisionByNumberResponse {
    public String contentType;
    public GetEmployerRevisionByNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employer employer;
    public GetEmployerRevisionByNumberResponse withEmployer(openapisdk.models.shared.Employer employer) {
        this.employer = employer;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployerRevisionByNumberResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetEmployerRevisionByNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}