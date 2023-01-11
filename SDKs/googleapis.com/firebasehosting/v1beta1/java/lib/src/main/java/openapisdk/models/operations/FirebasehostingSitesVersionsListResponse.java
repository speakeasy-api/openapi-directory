package openapisdk.models.operations;



public class FirebasehostingSitesVersionsListResponse {
    public String contentType;
    public FirebasehostingSitesVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVersionsResponse listVersionsResponse;
    public FirebasehostingSitesVersionsListResponse withListVersionsResponse(openapisdk.models.shared.ListVersionsResponse listVersionsResponse) {
        this.listVersionsResponse = listVersionsResponse;
        return this;
    }
    public Long statusCode;
    public FirebasehostingSitesVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}