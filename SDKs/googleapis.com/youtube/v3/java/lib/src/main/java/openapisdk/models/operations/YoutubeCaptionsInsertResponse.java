package openapisdk.models.operations;



public class YoutubeCaptionsInsertResponse {
    public openapisdk.models.shared.Caption caption;
    public YoutubeCaptionsInsertResponse withCaption(openapisdk.models.shared.Caption caption) {
        this.caption = caption;
        return this;
    }
    public String contentType;
    public YoutubeCaptionsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public YoutubeCaptionsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}