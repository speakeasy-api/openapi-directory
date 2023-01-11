package openapisdk.models.operations;



public class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse {
    public byte[] body;
    public GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MarketingEventPublicReadResponse marketingEventPublicReadResponse;
    public GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse withMarketingEventPublicReadResponse(openapisdk.models.shared.MarketingEventPublicReadResponse marketingEventPublicReadResponse) {
        this.marketingEventPublicReadResponse = marketingEventPublicReadResponse;
        return this;
    }
    public Long statusCode;
    public GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}