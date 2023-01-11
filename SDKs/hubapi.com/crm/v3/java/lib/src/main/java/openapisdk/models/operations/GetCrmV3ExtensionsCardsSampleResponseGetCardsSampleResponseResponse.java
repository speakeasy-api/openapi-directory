package openapisdk.models.operations;



public class GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse {
    public byte[] body;
    public GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IntegratorCardPayloadResponse integratorCardPayloadResponse;
    public GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse withIntegratorCardPayloadResponse(openapisdk.models.shared.IntegratorCardPayloadResponse integratorCardPayloadResponse) {
        this.integratorCardPayloadResponse = integratorCardPayloadResponse;
        return this;
    }
    public Long statusCode;
    public GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}