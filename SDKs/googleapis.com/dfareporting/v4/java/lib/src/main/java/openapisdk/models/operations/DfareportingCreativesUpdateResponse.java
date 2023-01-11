package openapisdk.models.operations;



public class DfareportingCreativesUpdateResponse {
    public String contentType;
    public DfareportingCreativesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public DfareportingCreativesUpdateResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}