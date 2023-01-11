package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse {
    public String contentType;
    public SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudSecuritycenterV1beta1SecurityMarks googleCloudSecuritycenterV1beta1SecurityMarks;
    public SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse withGoogleCloudSecuritycenterV1beta1SecurityMarks(openapisdk.models.shared.GoogleCloudSecuritycenterV1beta1SecurityMarks googleCloudSecuritycenterV1beta1SecurityMarks) {
        this.googleCloudSecuritycenterV1beta1SecurityMarks = googleCloudSecuritycenterV1beta1SecurityMarks;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}