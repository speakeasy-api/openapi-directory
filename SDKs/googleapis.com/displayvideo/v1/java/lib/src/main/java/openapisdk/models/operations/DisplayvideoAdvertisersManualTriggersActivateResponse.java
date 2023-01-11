package openapisdk.models.operations;



public class DisplayvideoAdvertisersManualTriggersActivateResponse {
    public String contentType;
    public DisplayvideoAdvertisersManualTriggersActivateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ManualTrigger manualTrigger;
    public DisplayvideoAdvertisersManualTriggersActivateResponse withManualTrigger(openapisdk.models.shared.ManualTrigger manualTrigger) {
        this.manualTrigger = manualTrigger;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersManualTriggersActivateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}