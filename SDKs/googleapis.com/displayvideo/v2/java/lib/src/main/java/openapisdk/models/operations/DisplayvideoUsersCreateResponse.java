package openapisdk.models.operations;



public class DisplayvideoUsersCreateResponse {
    public String contentType;
    public DisplayvideoUsersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoUsersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public DisplayvideoUsersCreateResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}