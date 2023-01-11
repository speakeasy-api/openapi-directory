package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesFindingsCreateResponse {
    public String contentType;
    public SecuritycenterOrganizationsSourcesFindingsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Finding finding;
    public SecuritycenterOrganizationsSourcesFindingsCreateResponse withFinding(openapisdk.models.shared.Finding finding) {
        this.finding = finding;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsSourcesFindingsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}