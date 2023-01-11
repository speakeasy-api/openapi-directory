package openapisdk.models.operations;



public class ListServiceResponse {
    public String contentType;
    public ListServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListServiceListServiceResponse listServiceResponse;
    public ListServiceResponse withListServiceResponse(ListServiceListServiceResponse listServiceResponse) {
        this.listServiceResponse = listServiceResponse;
        return this;
    }
    public Long statusCode;
    public ListServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}