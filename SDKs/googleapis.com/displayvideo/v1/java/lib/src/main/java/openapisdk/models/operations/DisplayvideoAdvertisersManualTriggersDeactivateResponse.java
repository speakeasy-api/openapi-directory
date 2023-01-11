package openapisdk.models.operations;



public class DisplayvideoAdvertisersManualTriggersDeactivateResponse {
    public String contentType;
    public DisplayvideoAdvertisersManualTriggersDeactivateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ManualTrigger manualTrigger;
    public DisplayvideoAdvertisersManualTriggersDeactivateResponse withManualTrigger(openapisdk.models.shared.ManualTrigger manualTrigger) {
        this.manualTrigger = manualTrigger;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersManualTriggersDeactivateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}