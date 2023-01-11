package openapisdk.models.operations;



public class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse {
    public byte[] body;
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MarketingEventPublicDefaultResponse marketingEventPublicDefaultResponse;
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse withMarketingEventPublicDefaultResponse(openapisdk.models.shared.MarketingEventPublicDefaultResponse marketingEventPublicDefaultResponse) {
        this.marketingEventPublicDefaultResponse = marketingEventPublicDefaultResponse;
        return this;
    }
    public Long statusCode;
    public PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}