package openapisdk.models.operations;



public class ListServiceBindingResponse {
    public String contentType;
    public ListServiceBindingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListServiceBindingListServiceBindingResponse listServiceBindingResponse;
    public ListServiceBindingResponse withListServiceBindingResponse(ListServiceBindingListServiceBindingResponse listServiceBindingResponse) {
        this.listServiceBindingResponse = listServiceBindingResponse;
        return this;
    }
    public Long statusCode;
    public ListServiceBindingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}