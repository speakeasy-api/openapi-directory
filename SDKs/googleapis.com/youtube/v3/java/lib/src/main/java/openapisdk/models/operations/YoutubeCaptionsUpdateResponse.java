package openapisdk.models.operations;



public class YoutubeCaptionsUpdateResponse {
    public openapisdk.models.shared.Caption caption;
    public YoutubeCaptionsUpdateResponse withCaption(openapisdk.models.shared.Caption caption) {
        this.caption = caption;
        return this;
    }
    public String contentType;
    public YoutubeCaptionsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeCaptionsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}