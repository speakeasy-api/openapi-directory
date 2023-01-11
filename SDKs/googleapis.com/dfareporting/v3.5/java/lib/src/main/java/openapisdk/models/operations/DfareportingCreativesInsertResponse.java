package openapisdk.models.operations;



public class DfareportingCreativesInsertResponse {
    public String contentType;
    public DfareportingCreativesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public DfareportingCreativesInsertResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}