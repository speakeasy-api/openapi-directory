package openapisdk.models.operations;



public class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse {
    public openapisdk.models.shared.BatchResponseSubscriberEmailResponse batchResponseSubscriberEmailResponse;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse withBatchResponseSubscriberEmailResponse(openapisdk.models.shared.BatchResponseSubscriberEmailResponse batchResponseSubscriberEmailResponse) {
        this.batchResponseSubscriberEmailResponse = batchResponseSubscriberEmailResponse;
        return this;
    }
    public byte[] body;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}