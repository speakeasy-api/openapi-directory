package openapisdk.models.operations;



public class AddOrUpdateNonPrimaryStateTaxResponse {
    public String contentType;
    public AddOrUpdateNonPrimaryStateTaxResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddOrUpdateNonPrimaryStateTaxResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public AddOrUpdateNonPrimaryStateTaxResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}