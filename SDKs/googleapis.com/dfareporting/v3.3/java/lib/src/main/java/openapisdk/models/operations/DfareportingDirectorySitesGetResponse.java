package openapisdk.models.operations;



public class DfareportingDirectorySitesGetResponse {
    public String contentType;
    public DfareportingDirectorySitesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectorySite directorySite;
    public DfareportingDirectorySitesGetResponse withDirectorySite(openapisdk.models.shared.DirectorySite directorySite) {
        this.directorySite = directorySite;
        return this;
    }
    public Long statusCode;
    public DfareportingDirectorySitesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}