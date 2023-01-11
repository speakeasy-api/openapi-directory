package openapisdk.models.operations;



public class DriveRevisionsPatchResponse {
    public String contentType;
    public DriveRevisionsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Revision revision;
    public DriveRevisionsPatchResponse withRevision(openapisdk.models.shared.Revision revision) {
        this.revision = revision;
        return this;
    }
    public Long statusCode;
    public DriveRevisionsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}