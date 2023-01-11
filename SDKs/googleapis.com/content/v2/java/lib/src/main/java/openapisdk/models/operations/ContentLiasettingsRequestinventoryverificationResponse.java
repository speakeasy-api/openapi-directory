package openapisdk.models.operations;



public class ContentLiasettingsRequestinventoryverificationResponse {
    public String contentType;
    public ContentLiasettingsRequestinventoryverificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiasettingsRequestInventoryVerificationResponse liasettingsRequestInventoryVerificationResponse;
    public ContentLiasettingsRequestinventoryverificationResponse withLiasettingsRequestInventoryVerificationResponse(openapisdk.models.shared.LiasettingsRequestInventoryVerificationResponse liasettingsRequestInventoryVerificationResponse) {
        this.liasettingsRequestInventoryVerificationResponse = liasettingsRequestInventoryVerificationResponse;
        return this;
    }
    public Long statusCode;
    public ContentLiasettingsRequestinventoryverificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}