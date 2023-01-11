package openapisdk.models.operations;



public class PostCrmV3ExtensionsCardsAppIdCreateResponse {
    public byte[] body;
    public PostCrmV3ExtensionsCardsAppIdCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CardResponse cardResponse;
    public PostCrmV3ExtensionsCardsAppIdCreateResponse withCardResponse(openapisdk.models.shared.CardResponse cardResponse) {
        this.cardResponse = cardResponse;
        return this;
    }
    public String contentType;
    public PostCrmV3ExtensionsCardsAppIdCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCrmV3ExtensionsCardsAppIdCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}