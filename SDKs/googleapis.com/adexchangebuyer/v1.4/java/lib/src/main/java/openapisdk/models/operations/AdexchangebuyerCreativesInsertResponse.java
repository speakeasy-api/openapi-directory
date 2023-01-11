package openapisdk.models.operations;



public class AdexchangebuyerCreativesInsertResponse {
    public String contentType;
    public AdexchangebuyerCreativesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Creative creative;
    public AdexchangebuyerCreativesInsertResponse withCreative(openapisdk.models.shared.Creative creative) {
        this.creative = creative;
        return this;
    }
    public Long statusCode;
    public AdexchangebuyerCreativesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}