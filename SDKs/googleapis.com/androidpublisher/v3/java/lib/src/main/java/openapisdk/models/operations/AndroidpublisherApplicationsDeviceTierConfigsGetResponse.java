package openapisdk.models.operations;



public class AndroidpublisherApplicationsDeviceTierConfigsGetResponse {
    public String contentType;
    public AndroidpublisherApplicationsDeviceTierConfigsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeviceTierConfig deviceTierConfig;
    public AndroidpublisherApplicationsDeviceTierConfigsGetResponse withDeviceTierConfig(openapisdk.models.shared.DeviceTierConfig deviceTierConfig) {
        this.deviceTierConfig = deviceTierConfig;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherApplicationsDeviceTierConfigsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}