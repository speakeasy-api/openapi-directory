package openapisdk.models.operations;



public class EditUserAlt1Response {
    public String contentType;
    public EditUserAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditUserAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public EditUserAlt1Response withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}