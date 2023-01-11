package openapisdk.models.operations;



public class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse {
    public openapisdk.models.shared.BatchResponseSubscriberVidResponse batchResponseSubscriberVidResponse;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse withBatchResponseSubscriberVidResponse(openapisdk.models.shared.BatchResponseSubscriberVidResponse batchResponseSubscriberVidResponse) {
        this.batchResponseSubscriberVidResponse = batchResponseSubscriberVidResponse;
        return this;
    }
    public byte[] body;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}