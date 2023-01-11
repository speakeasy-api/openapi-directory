package openapisdk.models.operations;



public class PostMarketingV3MarketingEventsEventsCreateResponse {
    public byte[] body;
    public PostMarketingV3MarketingEventsEventsCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostMarketingV3MarketingEventsEventsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MarketingEventDefaultResponse marketingEventDefaultResponse;
    public PostMarketingV3MarketingEventsEventsCreateResponse withMarketingEventDefaultResponse(openapisdk.models.shared.MarketingEventDefaultResponse marketingEventDefaultResponse) {
        this.marketingEventDefaultResponse = marketingEventDefaultResponse;
        return this;
    }
    public Long statusCode;
    public PostMarketingV3MarketingEventsEventsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}