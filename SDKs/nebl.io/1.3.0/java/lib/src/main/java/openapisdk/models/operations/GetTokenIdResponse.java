package openapisdk.models.operations;



public class GetTokenIdResponse {
    public String contentType;
    public GetTokenIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTokenIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTokenIdResponse getTokenIdResponse;
    public GetTokenIdResponse withGetTokenIdResponse(openapisdk.models.shared.GetTokenIdResponse getTokenIdResponse) {
        this.getTokenIdResponse = getTokenIdResponse;
        return this;
    }
}