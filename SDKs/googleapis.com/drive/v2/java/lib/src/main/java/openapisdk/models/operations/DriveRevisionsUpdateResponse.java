package openapisdk.models.operations;



public class DriveRevisionsUpdateResponse {
    public String contentType;
    public DriveRevisionsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Revision revision;
    public DriveRevisionsUpdateResponse withRevision(openapisdk.models.shared.Revision revision) {
        this.revision = revision;
        return this;
    }
    public Long statusCode;
    public DriveRevisionsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}