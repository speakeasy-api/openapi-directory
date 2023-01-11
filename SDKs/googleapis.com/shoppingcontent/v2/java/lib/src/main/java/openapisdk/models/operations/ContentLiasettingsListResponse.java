package openapisdk.models.operations;



public class ContentLiasettingsListResponse {
    public String contentType;
    public ContentLiasettingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LiasettingsListResponse liasettingsListResponse;
    public ContentLiasettingsListResponse withLiasettingsListResponse(openapisdk.models.shared.LiasettingsListResponse liasettingsListResponse) {
        this.liasettingsListResponse = liasettingsListResponse;
        return this;
    }
    public Long statusCode;
    public ContentLiasettingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}