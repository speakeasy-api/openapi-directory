package openapisdk.models.operations;



public class FetchExecutionResponse {
    public String contentType;
    public FetchExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV2FlowExecution studioV2FlowExecution;
    public FetchExecutionResponse withStudioV2FlowExecution(openapisdk.models.shared.StudioV2FlowExecution studioV2FlowExecution) {
        this.studioV2FlowExecution = studioV2FlowExecution;
        return this;
    }
}