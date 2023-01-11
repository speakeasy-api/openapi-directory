package openapisdk.models.operations;



public class ListBindingResponse {
    public String contentType;
    public ListBindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListBindingListBindingResponse listBindingResponse;
    public ListBindingResponse withListBindingResponse(ListBindingListBindingResponse listBindingResponse) {
        this.listBindingResponse = listBindingResponse;
        return this;
    }
    public Long statusCode;
    public ListBindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}