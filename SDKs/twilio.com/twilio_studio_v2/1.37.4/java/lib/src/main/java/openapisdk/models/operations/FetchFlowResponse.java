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
    public openapisdk.models.shared.StudioV2Flow studioV2Flow;
    public FetchFlowResponse withStudioV2Flow(openapisdk.models.shared.StudioV2Flow studioV2Flow) {
        this.studioV2Flow = studioV2Flow;
        return this;
    }
}