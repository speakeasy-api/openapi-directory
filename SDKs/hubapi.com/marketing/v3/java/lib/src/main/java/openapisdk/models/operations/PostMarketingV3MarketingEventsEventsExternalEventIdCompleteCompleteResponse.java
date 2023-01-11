package openapisdk.models.operations;



public class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse {
    public byte[] body;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MarketingEventDefaultResponse marketingEventDefaultResponse;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse withMarketingEventDefaultResponse(openapisdk.models.shared.MarketingEventDefaultResponse marketingEventDefaultResponse) {
        this.marketingEventDefaultResponse = marketingEventDefaultResponse;
        return this;
    }
    public Long statusCode;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}