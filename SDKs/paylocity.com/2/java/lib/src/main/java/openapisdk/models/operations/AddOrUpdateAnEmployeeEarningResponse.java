package openapisdk.models.operations;



public class AddOrUpdateAnEmployeeEarningResponse {
    public String contentType;
    public AddOrUpdateAnEmployeeEarningResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddOrUpdateAnEmployeeEarningResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public AddOrUpdateAnEmployeeEarningResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}