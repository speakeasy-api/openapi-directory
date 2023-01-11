package openapisdk.models.operations;



public class DisplayvideoAdvertisersManualTriggersListResponse {
    public String contentType;
    public DisplayvideoAdvertisersManualTriggersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListManualTriggersResponse listManualTriggersResponse;
    public DisplayvideoAdvertisersManualTriggersListResponse withListManualTriggersResponse(openapisdk.models.shared.ListManualTriggersResponse listManualTriggersResponse) {
        this.listManualTriggersResponse = listManualTriggersResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersManualTriggersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}