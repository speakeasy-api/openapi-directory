package openapisdk.models.operations;



public class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse {
    public byte[] body;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MarketingEventDefaultResponse marketingEventDefaultResponse;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse withMarketingEventDefaultResponse(openapisdk.models.shared.MarketingEventDefaultResponse marketingEventDefaultResponse) {
        this.marketingEventDefaultResponse = marketingEventDefaultResponse;
        return this;
    }
    public Long statusCode;
    public PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}