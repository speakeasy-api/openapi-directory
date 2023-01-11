package openapisdk.models.operations;



public class UpdateCallResponse {
    public String contentType;
    public UpdateCallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateCallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCall apiV2010AccountCall;
    public UpdateCallResponse withApiV2010AccountCall(openapisdk.models.shared.ApiV2010AccountCall apiV2010AccountCall) {
        this.apiV2010AccountCall = apiV2010AccountCall;
        return this;
    }
}