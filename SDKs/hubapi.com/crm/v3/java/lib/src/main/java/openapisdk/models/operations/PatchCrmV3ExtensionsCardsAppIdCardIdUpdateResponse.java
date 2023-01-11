package openapisdk.models.operations;



public class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse {
    public byte[] body;
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CardResponse cardResponse;
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse withCardResponse(openapisdk.models.shared.CardResponse cardResponse) {
        this.cardResponse = cardResponse;
        return this;
    }
    public String contentType;
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}