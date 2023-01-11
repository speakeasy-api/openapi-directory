package openapisdk.models.operations;



public class UpdateCompositionHookResponse {
    public String contentType;
    public UpdateCompositionHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCompositionHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1CompositionHook videoV1CompositionHook;
    public UpdateCompositionHookResponse withVideoV1CompositionHook(openapisdk.models.shared.VideoV1CompositionHook videoV1CompositionHook) {
        this.videoV1CompositionHook = videoV1CompositionHook;
        return this;
    }
}