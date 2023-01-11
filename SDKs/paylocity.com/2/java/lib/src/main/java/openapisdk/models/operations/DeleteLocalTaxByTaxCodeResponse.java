package openapisdk.models.operations;



public class DeleteLocalTaxByTaxCodeResponse {
    public String contentType;
    public DeleteLocalTaxByTaxCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteLocalTaxByTaxCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public DeleteLocalTaxByTaxCodeResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}