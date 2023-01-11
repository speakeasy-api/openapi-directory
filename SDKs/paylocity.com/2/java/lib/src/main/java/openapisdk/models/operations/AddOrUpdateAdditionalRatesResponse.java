package openapisdk.models.operations;



public class AddOrUpdateAdditionalRatesResponse {
    public String contentType;
    public AddOrUpdateAdditionalRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddOrUpdateAdditionalRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public AddOrUpdateAdditionalRatesResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}