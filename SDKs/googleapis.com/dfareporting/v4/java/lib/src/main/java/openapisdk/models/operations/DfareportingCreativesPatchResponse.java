package openapisdk.models.operations;



public class DfareportingCreativesPatchResponse {
    public String contentType;
    public DfareportingCreativesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public DfareportingCreativesPatchResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}