package openapisdk.models.operations;



public class DisplayvideoAdvertisersManualTriggersGetResponse {
    public String contentType;
    public DisplayvideoAdvertisersManualTriggersGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ManualTrigger manualTrigger;
    public DisplayvideoAdvertisersManualTriggersGetResponse withManualTrigger(openapisdk.models.shared.ManualTrigger manualTrigger) {
        this.manualTrigger = manualTrigger;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersManualTriggersGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}