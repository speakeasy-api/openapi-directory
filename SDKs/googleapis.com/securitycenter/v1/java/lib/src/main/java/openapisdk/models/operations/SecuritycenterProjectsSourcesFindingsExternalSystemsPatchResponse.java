package openapisdk.models.operations;



public class SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse {
    public String contentType;
    public SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudSecuritycenterV1ExternalSystem googleCloudSecuritycenterV1ExternalSystem;
    public SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse withGoogleCloudSecuritycenterV1ExternalSystem(openapisdk.models.shared.GoogleCloudSecuritycenterV1ExternalSystem googleCloudSecuritycenterV1ExternalSystem) {
        this.googleCloudSecuritycenterV1ExternalSystem = googleCloudSecuritycenterV1ExternalSystem;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsSourcesFindingsExternalSystemsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}