package openapisdk.models.operations;



public class ResourcesettingsProjectsSettingsListResponse {
    public String contentType;
    public ResourcesettingsProjectsSettingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudResourcesettingsV1ListSettingsResponse googleCloudResourcesettingsV1ListSettingsResponse;
    public ResourcesettingsProjectsSettingsListResponse withGoogleCloudResourcesettingsV1ListSettingsResponse(openapisdk.models.shared.GoogleCloudResourcesettingsV1ListSettingsResponse googleCloudResourcesettingsV1ListSettingsResponse) {
        this.googleCloudResourcesettingsV1ListSettingsResponse = googleCloudResourcesettingsV1ListSettingsResponse;
        return this;
    }
    public Long statusCode;
    public ResourcesettingsProjectsSettingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}