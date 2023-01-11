package openapisdk.models.operations;



public class GetCallResponse {
    public String contentType;
    public GetCallResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCallResponse getCallResponse;
    public GetCallResponse withGetCallResponse(openapisdk.models.shared.GetCallResponse getCallResponse) {
        this.getCallResponse = getCallResponse;
        return this;
    }
    public Long statusCode;
    public GetCallResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}