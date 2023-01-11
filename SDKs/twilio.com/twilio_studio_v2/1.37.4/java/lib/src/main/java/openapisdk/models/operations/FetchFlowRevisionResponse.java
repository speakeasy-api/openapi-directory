package openapisdk.models.operations;



public class FetchFlowRevisionResponse {
    public String contentType;
    public FetchFlowRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFlowRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StudioV2FlowFlowRevision studioV2FlowFlowRevision;
    public FetchFlowRevisionResponse withStudioV2FlowFlowRevision(openapisdk.models.shared.StudioV2FlowFlowRevision studioV2FlowFlowRevision) {
        this.studioV2FlowFlowRevision = studioV2FlowFlowRevision;
        return this;
    }
}