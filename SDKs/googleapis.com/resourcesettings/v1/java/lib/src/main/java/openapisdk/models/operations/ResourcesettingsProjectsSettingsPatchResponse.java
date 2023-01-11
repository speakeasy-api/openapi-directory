package openapisdk.models.operations;



public class ResourcesettingsProjectsSettingsPatchResponse {
    public String contentType;
    public ResourcesettingsProjectsSettingsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudResourcesettingsV1Setting googleCloudResourcesettingsV1Setting;
    public ResourcesettingsProjectsSettingsPatchResponse withGoogleCloudResourcesettingsV1Setting(openapisdk.models.shared.GoogleCloudResourcesettingsV1Setting googleCloudResourcesettingsV1Setting) {
        this.googleCloudResourcesettingsV1Setting = googleCloudResourcesettingsV1Setting;
        return this;
    }
    public Long statusCode;
    public ResourcesettingsProjectsSettingsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}