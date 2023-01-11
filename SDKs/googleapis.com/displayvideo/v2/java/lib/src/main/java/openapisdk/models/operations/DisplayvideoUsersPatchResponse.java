package openapisdk.models.operations;



public class DisplayvideoUsersPatchResponse {
    public String contentType;
    public DisplayvideoUsersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoUsersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public DisplayvideoUsersPatchResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}