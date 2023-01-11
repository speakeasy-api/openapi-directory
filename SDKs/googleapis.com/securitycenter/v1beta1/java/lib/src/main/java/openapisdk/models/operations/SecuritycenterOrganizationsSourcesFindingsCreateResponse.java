package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesFindingsCreateResponse {
    public String contentType;
    public SecuritycenterOrganizationsSourcesFindingsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudSecuritycenterV1beta1Finding googleCloudSecuritycenterV1beta1Finding;
    public SecuritycenterOrganizationsSourcesFindingsCreateResponse withGoogleCloudSecuritycenterV1beta1Finding(openapisdk.models.shared.GoogleCloudSecuritycenterV1beta1Finding googleCloudSecuritycenterV1beta1Finding) {
        this.googleCloudSecuritycenterV1beta1Finding = googleCloudSecuritycenterV1beta1Finding;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsSourcesFindingsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}