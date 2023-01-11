package openapisdk.models.operations;



public class GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse {
    public byte[] body;
    public GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventDetailSettings eventDetailSettings;
    public GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse withEventDetailSettings(openapisdk.models.shared.EventDetailSettings eventDetailSettings) {
        this.eventDetailSettings = eventDetailSettings;
        return this;
    }
    public Long statusCode;
    public GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}