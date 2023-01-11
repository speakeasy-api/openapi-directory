package openapisdk.models.operations;



public class FetchInteractionResponse {
    public String contentType;
    public FetchInteractionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchInteractionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.FlexV1Interaction flexV1Interaction;
    public FetchInteractionResponse withFlexV1Interaction(openapisdk.models.shared.FlexV1Interaction flexV1Interaction) {
        this.flexV1Interaction = flexV1Interaction;
        return this;
    }
}