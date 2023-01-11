package openapisdk.models.operations;



public class ListUnderstandTaskResponse {
    public String contentType;
    public ListUnderstandTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListUnderstandTaskListUnderstandTaskResponse listUnderstandTaskResponse;
    public ListUnderstandTaskResponse withListUnderstandTaskResponse(ListUnderstandTaskListUnderstandTaskResponse listUnderstandTaskResponse) {
        this.listUnderstandTaskResponse = listUnderstandTaskResponse;
        return this;
    }
    public Long statusCode;
    public ListUnderstandTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}