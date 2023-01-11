package openapisdk.models.operations;



public class DisplayvideoAdvertisersManualTriggersPatchResponse {
    public String contentType;
    public DisplayvideoAdvertisersManualTriggersPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ManualTrigger manualTrigger;
    public DisplayvideoAdvertisersManualTriggersPatchResponse withManualTrigger(openapisdk.models.shared.ManualTrigger manualTrigger) {
        this.manualTrigger = manualTrigger;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersManualTriggersPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}