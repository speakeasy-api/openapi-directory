package openapisdk.models.operations;



public class DfareportingDirectorySitesInsertResponse {
    public String contentType;
    public DfareportingDirectorySitesInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DirectorySite directorySite;
    public DfareportingDirectorySitesInsertResponse withDirectorySite(openapisdk.models.shared.DirectorySite directorySite) {
        this.directorySite = directorySite;
        return this;
    }
    public Long statusCode;
    public DfareportingDirectorySitesInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}