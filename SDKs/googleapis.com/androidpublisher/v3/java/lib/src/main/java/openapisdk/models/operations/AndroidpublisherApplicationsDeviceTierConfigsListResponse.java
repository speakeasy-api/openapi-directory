package openapisdk.models.operations;



public class AndroidpublisherApplicationsDeviceTierConfigsListResponse {
    public String contentType;
    public AndroidpublisherApplicationsDeviceTierConfigsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDeviceTierConfigsResponse listDeviceTierConfigsResponse;
    public AndroidpublisherApplicationsDeviceTierConfigsListResponse withListDeviceTierConfigsResponse(openapisdk.models.shared.ListDeviceTierConfigsResponse listDeviceTierConfigsResponse) {
        this.listDeviceTierConfigsResponse = listDeviceTierConfigsResponse;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherApplicationsDeviceTierConfigsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}