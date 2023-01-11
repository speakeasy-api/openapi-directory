package openapisdk.models.operations;



public class SecuritycenterOrganizationsSourcesFindingsListResponse {
    public String contentType;
    public SecuritycenterOrganizationsSourcesFindingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFindingsResponse listFindingsResponse;
    public SecuritycenterOrganizationsSourcesFindingsListResponse withListFindingsResponse(openapisdk.models.shared.ListFindingsResponse listFindingsResponse) {
        this.listFindingsResponse = listFindingsResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterOrganizationsSourcesFindingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}