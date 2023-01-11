package openapisdk.models.operations;



public class YoutubeCaptionsListResponse {
    public openapisdk.models.shared.CaptionListResponse captionListResponse;
    public YoutubeCaptionsListResponse withCaptionListResponse(openapisdk.models.shared.CaptionListResponse captionListResponse) {
        this.captionListResponse = captionListResponse;
        return this;
    }
    public String contentType;
    public YoutubeCaptionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeCaptionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}