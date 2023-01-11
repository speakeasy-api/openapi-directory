package openapisdk.models.operations;



public class EditUserResponse {
    public String contentType;
    public EditUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public EditUserResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}