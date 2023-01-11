package openapisdk.models.operations;



public class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse {
    public byte[] body;
    public GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CardResponse cardResponse;
    public GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse withCardResponse(openapisdk.models.shared.CardResponse cardResponse) {
        this.cardResponse = cardResponse;
        return this;
    }
    public String contentType;
    public GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}