package openapisdk.models.operations;



public class TestnetGetFaucetResponse {
    public String contentType;
    public TestnetGetFaucetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TestnetGetFaucetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.GetFaucetResponse getFaucetResponse;
    public TestnetGetFaucetResponse withGetFaucetResponse(openapisdk.models.shared.GetFaucetResponse getFaucetResponse) {
        this.getFaucetResponse = getFaucetResponse;
        return this;
    }
}