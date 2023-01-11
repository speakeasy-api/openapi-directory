package openapisdk.models.operations;



public class UpdateMessageResponse {
    public String contentType;
    public UpdateMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountMessage apiV2010AccountMessage;
    public UpdateMessageResponse withApiV2010AccountMessage(openapisdk.models.shared.ApiV2010AccountMessage apiV2010AccountMessage) {
        this.apiV2010AccountMessage = apiV2010AccountMessage;
        return this;
    }
}