package openapisdk.models.operations;



public class GetCrmV3ExtensionsCardsAppIdGetAllResponse {
    public byte[] body;
    public GetCrmV3ExtensionsCardsAppIdGetAllResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CardListResponse cardListResponse;
    public GetCrmV3ExtensionsCardsAppIdGetAllResponse withCardListResponse(openapisdk.models.shared.CardListResponse cardListResponse) {
        this.cardListResponse = cardListResponse;
        return this;
    }
    public String contentType;
    public GetCrmV3ExtensionsCardsAppIdGetAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCrmV3ExtensionsCardsAppIdGetAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}