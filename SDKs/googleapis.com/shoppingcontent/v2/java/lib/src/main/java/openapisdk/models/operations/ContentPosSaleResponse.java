package openapisdk.models.operations;



public class ContentPosSaleResponse {
    public String contentType;
    public ContentPosSaleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PosSaleResponse posSaleResponse;
    public ContentPosSaleResponse withPosSaleResponse(openapisdk.models.shared.PosSaleResponse posSaleResponse) {
        this.posSaleResponse = posSaleResponse;
        return this;
    }
    public Long statusCode;
    public ContentPosSaleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}