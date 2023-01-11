package openapisdk.models.operations;



public class ListFunctionVersionResponse {
    public String contentType;
    public ListFunctionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFunctionVersionListFunctionVersionResponse listFunctionVersionResponse;
    public ListFunctionVersionResponse withListFunctionVersionResponse(ListFunctionVersionListFunctionVersionResponse listFunctionVersionResponse) {
        this.listFunctionVersionResponse = listFunctionVersionResponse;
        return this;
    }
    public Long statusCode;
    public ListFunctionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}