package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesFindingsSetStateResponse {
    public String contentType;
    public SecuritycenterOrganizationsSourcesFindingsSetStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudSecuritycenterV1beta1Finding googleCloudSecuritycenterV1beta1Finding;
    public SecuritycenterOrganizationsSourcesFindingsSetStateResponse withGoogleCloudSecuritycenterV1beta1Finding(openapisdk.models.shared.GoogleCloudSecuritycenterV1beta1Finding googleCloudSecuritycenterV1beta1Finding) {
        this.googleCloudSecuritycenterV1beta1Finding = googleCloudSecuritycenterV1beta1Finding;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsSourcesFindingsSetStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}