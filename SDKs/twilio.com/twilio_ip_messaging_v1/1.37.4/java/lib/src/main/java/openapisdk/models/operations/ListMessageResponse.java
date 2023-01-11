package openapisdk.models.operations;



public class ListMessageResponse {
    public String contentType;
    public ListMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListMessageListMessageResponse listMessageResponse;
    public ListMessageResponse withListMessageResponse(ListMessageListMessageResponse listMessageResponse) {
        this.listMessageResponse = listMessageResponse;
        return this;
    }
    public Long statusCode;
    public ListMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}