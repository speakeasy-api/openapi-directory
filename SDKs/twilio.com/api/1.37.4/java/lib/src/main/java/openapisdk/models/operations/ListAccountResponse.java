package openapisdk.models.operations;



public class ListAccountResponse {
    public String contentType;
    public ListAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListAccountListAccountResponse listAccountResponse;
    public ListAccountResponse withListAccountResponse(ListAccountListAccountResponse listAccountResponse) {
        this.listAccountResponse = listAccountResponse;
        return this;
    }
    public Long statusCode;
    public ListAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}