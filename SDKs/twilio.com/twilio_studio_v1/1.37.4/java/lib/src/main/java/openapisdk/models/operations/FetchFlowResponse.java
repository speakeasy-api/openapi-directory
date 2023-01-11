package openapisdk.models.operations;



public class FetchFlowResponse {
    public String contentType;
    public FetchFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV1Flow studioV1Flow;
    public FetchFlowResponse withStudioV1Flow(openapisdk.models.shared.StudioV1Flow studioV1Flow) {
        this.studioV1Flow = studioV1Flow;
        return this;
    }
}