package openapisdk.models.operations;



public class ListFlexFlowResponse {
    public String contentType;
    public ListFlexFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFlexFlowListFlexFlowResponse listFlexFlowResponse;
    public ListFlexFlowResponse withListFlexFlowResponse(ListFlexFlowListFlexFlowResponse listFlexFlowResponse) {
        this.listFlexFlowResponse = listFlexFlowResponse;
        return this;
    }
    public Long statusCode;
    public ListFlexFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}