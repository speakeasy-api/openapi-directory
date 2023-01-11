package openapisdk.models.operations;



public class ListFunctionResponse {
    public String contentType;
    public ListFunctionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFunctionListFunctionResponse listFunctionResponse;
    public ListFunctionResponse withListFunctionResponse(ListFunctionListFunctionResponse listFunctionResponse) {
        this.listFunctionResponse = listFunctionResponse;
        return this;
    }
    public Long statusCode;
    public ListFunctionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}