package openapisdk.models.operations;



public class CreateCompositionHookResponse {
    public String contentType;
    public CreateCompositionHookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCompositionHookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1CompositionHook videoV1CompositionHook;
    public CreateCompositionHookResponse withVideoV1CompositionHook(openapisdk.models.shared.VideoV1CompositionHook videoV1CompositionHook) {
        this.videoV1CompositionHook = videoV1CompositionHook;
        return this;
    }
}