package openapisdk.models.operations;



public class SecuritycenterProjectsMuteConfigsCreateResponse {
    public String contentType;
    public SecuritycenterProjectsMuteConfigsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudSecuritycenterV1MuteConfig googleCloudSecuritycenterV1MuteConfig;
    public SecuritycenterProjectsMuteConfigsCreateResponse withGoogleCloudSecuritycenterV1MuteConfig(openapisdk.models.shared.GoogleCloudSecuritycenterV1MuteConfig googleCloudSecuritycenterV1MuteConfig) {
        this.googleCloudSecuritycenterV1MuteConfig = googleCloudSecuritycenterV1MuteConfig;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsMuteConfigsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}