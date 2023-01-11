package openapisdk.models.operations;



public class CreateFlexFlowResponse {
    public String contentType;
    public CreateFlexFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateFlexFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1FlexFlow flexV1FlexFlow;
    public CreateFlexFlowResponse withFlexV1FlexFlow(openapisdk.models.shared.FlexV1FlexFlow flexV1FlexFlow) {
        this.flexV1FlexFlow = flexV1FlexFlow;
        return this;
    }
}