package openapisdk.models.operations;



public class FetchExecutionContextResponse {
    public String contentType;
    public FetchExecutionContextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchExecutionContextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV2FlowExecutionExecutionContext studioV2FlowExecutionExecutionContext;
    public FetchExecutionContextResponse withStudioV2FlowExecutionExecutionContext(openapisdk.models.shared.StudioV2FlowExecutionExecutionContext studioV2FlowExecutionExecutionContext) {
        this.studioV2FlowExecutionExecutionContext = studioV2FlowExecutionExecutionContext;
        return this;
    }
}