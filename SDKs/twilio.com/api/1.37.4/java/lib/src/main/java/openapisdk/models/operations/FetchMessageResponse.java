package openapisdk.models.operations;



public class FetchMessageResponse {
    public String contentType;
    public FetchMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountMessage apiV2010AccountMessage;
    public FetchMessageResponse withApiV2010AccountMessage(openapisdk.models.shared.ApiV2010AccountMessage apiV2010AccountMessage) {
        this.apiV2010AccountMessage = apiV2010AccountMessage;
        return this;
    }
}