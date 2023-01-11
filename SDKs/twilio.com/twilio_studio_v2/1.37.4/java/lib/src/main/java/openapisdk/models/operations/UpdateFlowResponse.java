package openapisdk.models.operations;



public class UpdateFlowResponse {
    public String contentType;
    public UpdateFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV2Flow studioV2Flow;
    public UpdateFlowResponse withStudioV2Flow(openapisdk.models.shared.StudioV2Flow studioV2Flow) {
        this.studioV2Flow = studioV2Flow;
        return this;
    }
}