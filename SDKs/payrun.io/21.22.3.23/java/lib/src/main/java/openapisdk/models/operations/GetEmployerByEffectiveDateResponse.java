package openapisdk.models.operations;



public class GetEmployerByEffectiveDateResponse {
    public String contentType;
    public GetEmployerByEffectiveDateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Employer employer;
    public GetEmployerByEffectiveDateResponse withEmployer(openapisdk.models.shared.Employer employer) {
        this.employer = employer;
        return this;
    }
    public openapisdk.models.shared.ErrorModel errorModel;
    public GetEmployerByEffectiveDateResponse withErrorModel(openapisdk.models.shared.ErrorModel errorModel) {
        this.errorModel = errorModel;
        return this;
    }
    public Long statusCode;
    public GetEmployerByEffectiveDateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}