package openapisdk.models.operations;



public class SecuritycenterProjectsSourcesFindingsListResponse {
    public String contentType;
    public SecuritycenterProjectsSourcesFindingsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFindingsResponse listFindingsResponse;
    public SecuritycenterProjectsSourcesFindingsListResponse withListFindingsResponse(openapisdk.models.shared.ListFindingsResponse listFindingsResponse) {
        this.listFindingsResponse = listFindingsResponse;
        return this;
    }
    public Long statusCode;
    public SecuritycenterProjectsSourcesFindingsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}