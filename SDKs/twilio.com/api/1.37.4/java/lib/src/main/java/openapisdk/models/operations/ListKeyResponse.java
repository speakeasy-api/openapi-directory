package openapisdk.models.operations;



public class ListKeyResponse {
    public String contentType;
    public ListKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListKeyListKeyResponse listKeyResponse;
    public ListKeyResponse withListKeyResponse(ListKeyListKeyResponse listKeyResponse) {
        this.listKeyResponse = listKeyResponse;
        return this;
    }
    public Long statusCode;
    public ListKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}