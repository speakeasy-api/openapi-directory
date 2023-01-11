package openapisdk.models.operations;



public class DriveRevisionsGetResponse {
    public String contentType;
    public DriveRevisionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Revision revision;
    public DriveRevisionsGetResponse withRevision(openapisdk.models.shared.Revision revision) {
        this.revision = revision;
        return this;
    }
    public Long statusCode;
    public DriveRevisionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}