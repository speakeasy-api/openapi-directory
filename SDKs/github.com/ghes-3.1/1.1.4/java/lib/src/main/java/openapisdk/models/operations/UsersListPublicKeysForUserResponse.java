package openapisdk.models.operations;



public class UsersListPublicKeysForUserResponse {
    public String contentType;
    public UsersListPublicKeysForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UsersListPublicKeysForUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UsersListPublicKeysForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.KeySimple[] keySimples;
    public UsersListPublicKeysForUserResponse withKeySimples(openapisdk.models.shared.KeySimple[] keySimples) {
        this.keySimples = keySimples;
        return this;
    }
}