package openapisdk.models.operations;



public class PostMarketingV3MarketingEventsAppIdSettingsCreateResponse {
    public byte[] body;
    public PostMarketingV3MarketingEventsAppIdSettingsCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostMarketingV3MarketingEventsAppIdSettingsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventDetailSettings eventDetailSettings;
    public PostMarketingV3MarketingEventsAppIdSettingsCreateResponse withEventDetailSettings(openapisdk.models.shared.EventDetailSettings eventDetailSettings) {
        this.eventDetailSettings = eventDetailSettings;
        return this;
    }
    public Long statusCode;
    public PostMarketingV3MarketingEventsAppIdSettingsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}