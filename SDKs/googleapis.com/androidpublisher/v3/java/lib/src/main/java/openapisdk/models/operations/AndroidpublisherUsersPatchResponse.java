package openapisdk.models.operations;



public class AndroidpublisherUsersPatchResponse {
    public String contentType;
    public AndroidpublisherUsersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherUsersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public AndroidpublisherUsersPatchResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}