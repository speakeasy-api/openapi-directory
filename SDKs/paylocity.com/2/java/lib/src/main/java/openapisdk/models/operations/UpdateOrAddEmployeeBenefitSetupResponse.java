package openapisdk.models.operations;



public class UpdateOrAddEmployeeBenefitSetupResponse {
    public String contentType;
    public UpdateOrAddEmployeeBenefitSetupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateOrAddEmployeeBenefitSetupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public UpdateOrAddEmployeeBenefitSetupResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}