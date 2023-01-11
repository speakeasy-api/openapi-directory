package openapisdk.models.operations;



public class DfareportingPostalCodesGetResponse {
    public String contentType;
    public DfareportingPostalCodesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PostalCode postalCode;
    public DfareportingPostalCodesGetResponse withPostalCode(openapisdk.models.shared.PostalCode postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    public Long statusCode;
    public DfareportingPostalCodesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}