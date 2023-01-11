package openapisdk.models.operations;



public class DfareportingDirectorySitesListResponse {
    public String contentType;
    public DfareportingDirectorySitesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectorySitesListResponse directorySitesListResponse;
    public DfareportingDirectorySitesListResponse withDirectorySitesListResponse(openapisdk.models.shared.DirectorySitesListResponse directorySitesListResponse) {
        this.directorySitesListResponse = directorySitesListResponse;
        return this;
    }
    public Long statusCode;
    public DfareportingDirectorySitesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}