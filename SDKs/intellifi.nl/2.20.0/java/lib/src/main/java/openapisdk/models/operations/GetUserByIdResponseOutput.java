package openapisdk.models.operations;



public class GetUserByIdResponseOutput {
    public String contentType;
    public GetUserByIdResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserByIdResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserOutput user;
    public GetUserByIdResponseOutput withUser(openapisdk.models.shared.UserOutput user) {
        this.user = user;
        return this;
    }
}