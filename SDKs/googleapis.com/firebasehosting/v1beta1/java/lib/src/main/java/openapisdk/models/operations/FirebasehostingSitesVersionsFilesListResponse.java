package openapisdk.models.operations;



public class FirebasehostingSitesVersionsFilesListResponse {
    public String contentType;
    public FirebasehostingSitesVersionsFilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVersionFilesResponse listVersionFilesResponse;
    public FirebasehostingSitesVersionsFilesListResponse withListVersionFilesResponse(openapisdk.models.shared.ListVersionFilesResponse listVersionFilesResponse) {
        this.listVersionFilesResponse = listVersionFilesResponse;
        return this;
    }
    public Long statusCode;
    public FirebasehostingSitesVersionsFilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}