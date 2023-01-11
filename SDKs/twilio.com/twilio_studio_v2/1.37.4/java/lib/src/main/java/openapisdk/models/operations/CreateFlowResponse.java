package openapisdk.models.operations;



public class CreateFlowResponse {
    public String contentType;
    public CreateFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV2Flow studioV2Flow;
    public CreateFlowResponse withStudioV2Flow(openapisdk.models.shared.StudioV2Flow studioV2Flow) {
        this.studioV2Flow = studioV2Flow;
        return this;
    }
}