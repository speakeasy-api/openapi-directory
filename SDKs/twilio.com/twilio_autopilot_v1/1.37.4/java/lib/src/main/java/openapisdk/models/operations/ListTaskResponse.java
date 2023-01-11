package openapisdk.models.operations;



public class ListTaskResponse {
    public String contentType;
    public ListTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListTaskListTaskResponse listTaskResponse;
    public ListTaskResponse withListTaskResponse(ListTaskListTaskResponse listTaskResponse) {
        this.listTaskResponse = listTaskResponse;
        return this;
    }
    public Long statusCode;
    public ListTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}