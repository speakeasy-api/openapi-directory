package openapisdk.models.operations;



public class CreateMessageResponse {
    public String contentType;
    public CreateMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountMessage apiV2010AccountMessage;
    public CreateMessageResponse withApiV2010AccountMessage(openapisdk.models.shared.ApiV2010AccountMessage apiV2010AccountMessage) {
        this.apiV2010AccountMessage = apiV2010AccountMessage;
        return this;
    }
}