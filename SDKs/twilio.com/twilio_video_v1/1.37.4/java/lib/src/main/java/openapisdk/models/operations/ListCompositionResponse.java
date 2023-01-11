package openapisdk.models.operations;



public class ListCompositionResponse {
    public String contentType;
    public ListCompositionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListCompositionListCompositionResponse listCompositionResponse;
    public ListCompositionResponse withListCompositionResponse(ListCompositionListCompositionResponse listCompositionResponse) {
        this.listCompositionResponse = listCompositionResponse;
        return this;
    }
    public Long statusCode;
    public ListCompositionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}