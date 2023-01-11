package openapisdk.models.operations;



public class FirebasehostingProjectsSitesListResponse {
    public String contentType;
    public FirebasehostingProjectsSitesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSitesResponse listSitesResponse;
    public FirebasehostingProjectsSitesListResponse withListSitesResponse(openapisdk.models.shared.ListSitesResponse listSitesResponse) {
        this.listSitesResponse = listSitesResponse;
        return this;
    }
    public Long statusCode;
    public FirebasehostingProjectsSitesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}