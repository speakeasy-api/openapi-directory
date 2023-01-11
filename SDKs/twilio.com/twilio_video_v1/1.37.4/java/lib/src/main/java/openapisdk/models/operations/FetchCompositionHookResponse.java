package openapisdk.models.operations;



public class FetchCompositionHookResponse {
    public String contentType;
    public FetchCompositionHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCompositionHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1CompositionHook videoV1CompositionHook;
    public FetchCompositionHookResponse withVideoV1CompositionHook(openapisdk.models.shared.VideoV1CompositionHook videoV1CompositionHook) {
        this.videoV1CompositionHook = videoV1CompositionHook;
        return this;
    }
}