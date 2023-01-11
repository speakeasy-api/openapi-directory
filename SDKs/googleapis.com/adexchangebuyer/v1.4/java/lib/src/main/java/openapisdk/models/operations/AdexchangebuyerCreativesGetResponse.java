package openapisdk.models.operations;



public class AdexchangebuyerCreativesGetResponse {
    public String contentType;
    public AdexchangebuyerCreativesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public AdexchangebuyerCreativesGetResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerCreativesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}