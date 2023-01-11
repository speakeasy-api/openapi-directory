package openapisdk.models.operations;



public class CreateInteractionResponse {
    public String contentType;
    public CreateInteractionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateInteractionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1Interaction flexV1Interaction;
    public CreateInteractionResponse withFlexV1Interaction(openapisdk.models.shared.FlexV1Interaction flexV1Interaction) {
        this.flexV1Interaction = flexV1Interaction;
        return this;
    }
}