package openapisdk.models.operations;



public class ListCompositionHookResponse {
    public String contentType;
    public ListCompositionHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListCompositionHookListCompositionHookResponse listCompositionHookResponse;
    public ListCompositionHookResponse withListCompositionHookResponse(ListCompositionHookListCompositionHookResponse listCompositionHookResponse) {
        this.listCompositionHookResponse = listCompositionHookResponse;
        return this;
    }
    public Long statusCode;
    public ListCompositionHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}