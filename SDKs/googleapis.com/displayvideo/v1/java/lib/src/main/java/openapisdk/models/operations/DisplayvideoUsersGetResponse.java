package openapisdk.models.operations;



public class DisplayvideoUsersGetResponse {
    public String contentType;
    public DisplayvideoUsersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoUsersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public DisplayvideoUsersGetResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}