package openapisdk.models.operations;



public class CreateUserDefinedMessageResponse {
    public String contentType;
    public CreateUserDefinedMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateUserDefinedMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCallUserDefinedMessage apiV2010AccountCallUserDefinedMessage;
    public CreateUserDefinedMessageResponse withApiV2010AccountCallUserDefinedMessage(openapisdk.models.shared.ApiV2010AccountCallUserDefinedMessage apiV2010AccountCallUserDefinedMessage) {
        this.apiV2010AccountCallUserDefinedMessage = apiV2010AccountCallUserDefinedMessage;
        return this;
    }
}