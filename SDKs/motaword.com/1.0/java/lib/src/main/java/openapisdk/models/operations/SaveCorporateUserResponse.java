package openapisdk.models.operations;



public class SaveCorporateUserResponse {
    public String contentType;
    public SaveCorporateUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SaveCorporateUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public SaveCorporateUserResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}