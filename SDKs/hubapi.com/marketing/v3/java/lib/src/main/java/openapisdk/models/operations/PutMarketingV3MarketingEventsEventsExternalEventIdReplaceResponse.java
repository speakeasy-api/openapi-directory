package openapisdk.models.operations;



public class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse {
    public byte[] body;
    public PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MarketingEventPublicDefaultResponse marketingEventPublicDefaultResponse;
    public PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse withMarketingEventPublicDefaultResponse(openapisdk.models.shared.MarketingEventPublicDefaultResponse marketingEventPublicDefaultResponse) {
        this.marketingEventPublicDefaultResponse = marketingEventPublicDefaultResponse;
        return this;
    }
    public Long statusCode;
    public PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}