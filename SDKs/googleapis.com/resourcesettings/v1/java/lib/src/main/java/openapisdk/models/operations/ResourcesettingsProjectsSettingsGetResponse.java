package openapisdk.models.operations;



public class ResourcesettingsProjectsSettingsGetResponse {
    public String contentType;
    public ResourcesettingsProjectsSettingsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudResourcesettingsV1Setting googleCloudResourcesettingsV1Setting;
    public ResourcesettingsProjectsSettingsGetResponse withGoogleCloudResourcesettingsV1Setting(openapisdk.models.shared.GoogleCloudResourcesettingsV1Setting googleCloudResourcesettingsV1Setting) {
        this.googleCloudResourcesettingsV1Setting = googleCloudResourcesettingsV1Setting;
        return this;
    }
    public Long statusCode;
    public ResourcesettingsProjectsSettingsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}