package openapisdk.models.operations;



public class CreateCompositionResponse {
    public String contentType;
    public CreateCompositionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCompositionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1Composition videoV1Composition;
    public CreateCompositionResponse withVideoV1Composition(openapisdk.models.shared.VideoV1Composition videoV1Composition) {
        this.videoV1Composition = videoV1Composition;
        return this;
    }
}