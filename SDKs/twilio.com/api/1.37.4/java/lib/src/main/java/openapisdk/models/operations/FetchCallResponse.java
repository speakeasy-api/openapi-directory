package openapisdk.models.operations;



public class FetchCallResponse {
    public String contentType;
    public FetchCallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchCallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ApiV2010AccountCall apiV2010AccountCall;
    public FetchCallResponse withApiV2010AccountCall(openapisdk.models.shared.ApiV2010AccountCall apiV2010AccountCall) {
        this.apiV2010AccountCall = apiV2010AccountCall;
        return this;
    }
}