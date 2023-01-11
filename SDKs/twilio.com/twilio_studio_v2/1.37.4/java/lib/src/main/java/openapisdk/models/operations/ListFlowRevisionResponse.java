package openapisdk.models.operations;



public class ListFlowRevisionResponse {
    public String contentType;
    public ListFlowRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListFlowRevisionListFlowRevisionResponse listFlowRevisionResponse;
    public ListFlowRevisionResponse withListFlowRevisionResponse(ListFlowRevisionListFlowRevisionResponse listFlowRevisionResponse) {
        this.listFlowRevisionResponse = listFlowRevisionResponse;
        return this;
    }
    public Long statusCode;
    public ListFlowRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}