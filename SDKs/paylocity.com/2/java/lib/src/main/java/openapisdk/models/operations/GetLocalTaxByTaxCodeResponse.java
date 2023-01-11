package openapisdk.models.operations;



public class GetLocalTaxByTaxCodeResponse {
    public String contentType;
    public GetLocalTaxByTaxCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLocalTaxByTaxCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetLocalTaxByTaxCodeResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
    public openapisdk.models.shared.LocalTax[] localTaxes;
    public GetLocalTaxByTaxCodeResponse withLocalTaxes(openapisdk.models.shared.LocalTax[] localTaxes) {
        this.localTaxes = localTaxes;
        return this;
    }
}