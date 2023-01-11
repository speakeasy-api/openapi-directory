package openapisdk.models.operations;



public class FetchCompositionResponse {
    public String contentType;
    public FetchCompositionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCompositionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VideoV1Composition videoV1Composition;
    public FetchCompositionResponse withVideoV1Composition(openapisdk.models.shared.VideoV1Composition videoV1Composition) {
        this.videoV1Composition = videoV1Composition;
        return this;
    }
}