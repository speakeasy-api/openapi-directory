package openapisdk.models.operations;



public class FetchFlexFlowResponse {
    public String contentType;
    public FetchFlexFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchFlexFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1FlexFlow flexV1FlexFlow;
    public FetchFlexFlowResponse withFlexV1FlexFlow(openapisdk.models.shared.FlexV1FlexFlow flexV1FlexFlow) {
        this.flexV1FlexFlow = flexV1FlexFlow;
        return this;
    }
}