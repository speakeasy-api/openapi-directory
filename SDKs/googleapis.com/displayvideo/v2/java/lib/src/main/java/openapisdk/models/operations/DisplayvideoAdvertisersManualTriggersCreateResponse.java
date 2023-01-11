package openapisdk.models.operations;



public class DisplayvideoAdvertisersManualTriggersCreateResponse {
    public String contentType;
    public DisplayvideoAdvertisersManualTriggersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ManualTrigger manualTrigger;
    public DisplayvideoAdvertisersManualTriggersCreateResponse withManualTrigger(openapisdk.models.shared.ManualTrigger manualTrigger) {
        this.manualTrigger = manualTrigger;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersManualTriggersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}