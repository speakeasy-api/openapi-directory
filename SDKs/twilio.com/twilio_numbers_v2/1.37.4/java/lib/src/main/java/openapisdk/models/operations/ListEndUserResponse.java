package openapisdk.models.operations;



public class ListEndUserResponse {
    public String contentType;
    public ListEndUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListEndUserListEndUserResponse listEndUserResponse;
    public ListEndUserResponse withListEndUserResponse(ListEndUserListEndUserResponse listEndUserResponse) {
        this.listEndUserResponse = listEndUserResponse;
        return this;
    }
    public Long statusCode;
    public ListEndUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}