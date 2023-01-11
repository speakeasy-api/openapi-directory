package openapisdk.models.operations;



public class UpdateFlexFlowResponse {
    public String contentType;
    public UpdateFlexFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateFlexFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1FlexFlow flexV1FlexFlow;
    public UpdateFlexFlowResponse withFlexV1FlexFlow(openapisdk.models.shared.FlexV1FlexFlow flexV1FlexFlow) {
        this.flexV1FlexFlow = flexV1FlexFlow;
        return this;
    }
}