package openapisdk.models.operations;



public class ListServiceUserResponse {
    public String contentType;
    public ListServiceUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListServiceUserListServiceUserResponse listServiceUserResponse;
    public ListServiceUserResponse withListServiceUserResponse(ListServiceUserListServiceUserResponse listServiceUserResponse) {
        this.listServiceUserResponse = listServiceUserResponse;
        return this;
    }
    public Long statusCode;
    public ListServiceUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}