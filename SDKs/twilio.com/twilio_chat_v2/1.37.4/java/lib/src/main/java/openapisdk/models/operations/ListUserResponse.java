package openapisdk.models.operations;



public class ListUserResponse {
    public String contentType;
    public ListUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListUserListUserResponse listUserResponse;
    public ListUserResponse withListUserResponse(ListUserListUserResponse listUserResponse) {
        this.listUserResponse = listUserResponse;
        return this;
    }
    public Long statusCode;
    public ListUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}