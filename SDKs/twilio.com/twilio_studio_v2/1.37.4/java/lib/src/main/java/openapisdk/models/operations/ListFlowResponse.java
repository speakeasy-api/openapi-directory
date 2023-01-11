package openapisdk.models.operations;



public class ListFlowResponse {
    public String contentType;
    public ListFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFlowListFlowResponse listFlowResponse;
    public ListFlowResponse withListFlowResponse(ListFlowListFlowResponse listFlowResponse) {
        this.listFlowResponse = listFlowResponse;
        return this;
    }
    public Long statusCode;
    public ListFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}