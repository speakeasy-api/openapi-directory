package openapisdk.models.operations;



public class PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse {
    public openapisdk.models.shared.BatchResponseMarketingEventPublicDefaultResponse batchResponseMarketingEventPublicDefaultResponse;
    public PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse withBatchResponseMarketingEventPublicDefaultResponse(openapisdk.models.shared.BatchResponseMarketingEventPublicDefaultResponse batchResponseMarketingEventPublicDefaultResponse) {
        this.batchResponseMarketingEventPublicDefaultResponse = batchResponseMarketingEventPublicDefaultResponse;
        return this;
    }
    public byte[] body;
    public PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}