package openapisdk.models.operations;



public class ListExecutionResponse {
    public String contentType;
    public ListExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListExecutionListExecutionResponse listExecutionResponse;
    public ListExecutionResponse withListExecutionResponse(ListExecutionListExecutionResponse listExecutionResponse) {
        this.listExecutionResponse = listExecutionResponse;
        return this;
    }
    public Long statusCode;
    public ListExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}