package openapisdk.models.operations;



public class FirebasehostingSitesReleasesListResponse {
    public String contentType;
    public FirebasehostingSitesReleasesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReleasesResponse listReleasesResponse;
    public FirebasehostingSitesReleasesListResponse withListReleasesResponse(openapisdk.models.shared.ListReleasesResponse listReleasesResponse) {
        this.listReleasesResponse = listReleasesResponse;
        return this;
    }
    public Long statusCode;
    public FirebasehostingSitesReleasesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}