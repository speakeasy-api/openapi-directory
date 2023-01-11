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
    public openapisdk.models.shared.StudioV1FlowExecution studioV1FlowExecution;
    public FetchExecutionResponse withStudioV1FlowExecution(openapisdk.models.shared.StudioV1FlowExecution studioV1FlowExecution) {
        this.studioV1FlowExecution = studioV1FlowExecution;
        return this;
    }
}