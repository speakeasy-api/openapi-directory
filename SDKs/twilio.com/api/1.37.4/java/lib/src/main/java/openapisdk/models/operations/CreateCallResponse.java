package openapisdk.models.operations;



public class CreateCallResponse {
    public String contentType;
    public CreateCallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCall apiV2010AccountCall;
    public CreateCallResponse withApiV2010AccountCall(openapisdk.models.shared.ApiV2010AccountCall apiV2010AccountCall) {
        this.apiV2010AccountCall = apiV2010AccountCall;
        return this;
    }
}