package openapisdk.models.operations;



public class GetAllLocalTaxesResponse {
    public String contentType;
    public GetAllLocalTaxesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllLocalTaxesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error[] errors;
    public GetAllLocalTaxesResponse withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
    public openapisdk.models.shared.LocalTax[] localTaxes;
    public GetAllLocalTaxesResponse withLocalTaxes(openapisdk.models.shared.LocalTax[] localTaxes) {
        this.localTaxes = localTaxes;
        return this;
    }
}