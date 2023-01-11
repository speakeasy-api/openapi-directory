package openapisdk.models.operations;



public class TestnetGetTokenIdResponse {
    public String contentType;
    public TestnetGetTokenIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestnetGetTokenIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetTokenIdResponse getTokenIdResponse;
    public TestnetGetTokenIdResponse withGetTokenIdResponse(openapisdk.models.shared.GetTokenIdResponse getTokenIdResponse) {
        this.getTokenIdResponse = getTokenIdResponse;
        return this;
    }
}