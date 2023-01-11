package openapisdk.models.operations;



public class GetCallsResponse {
    public String contentType;
    public GetCallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCallsResponse getCallsResponse;
    public GetCallsResponse withGetCallsResponse(openapisdk.models.shared.GetCallsResponse getCallsResponse) {
        this.getCallsResponse = getCallsResponse;
        return this;
    }
    public Long statusCode;
    public GetCallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}