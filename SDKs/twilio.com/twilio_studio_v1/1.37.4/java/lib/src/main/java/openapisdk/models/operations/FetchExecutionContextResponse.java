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
    public openapisdk.models.shared.StudioV1FlowExecutionExecutionContext studioV1FlowExecutionExecutionContext;
    public FetchExecutionContextResponse withStudioV1FlowExecutionExecutionContext(openapisdk.models.shared.StudioV1FlowExecutionExecutionContext studioV1FlowExecutionExecutionContext) {
        this.studioV1FlowExecutionExecutionContext = studioV1FlowExecutionExecutionContext;
        return this;
    }
}