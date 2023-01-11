package openapisdk.models.operations;



public class AddOrUpdatePrimaryStateTaxResponse {
    public String contentType;
    public AddOrUpdatePrimaryStateTaxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddOrUpdatePrimaryStateTaxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public AddOrUpdatePrimaryStateTaxResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}