package openapisdk.models.operations;



public class UpdateFlowValidateResponse {
    public String contentType;
    public UpdateFlowValidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateFlowValidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV2FlowValidate studioV2FlowValidate;
    public UpdateFlowValidateResponse withStudioV2FlowValidate(openapisdk.models.shared.StudioV2FlowValidate studioV2FlowValidate) {
        this.studioV2FlowValidate = studioV2FlowValidate;
        return this;
    }
}