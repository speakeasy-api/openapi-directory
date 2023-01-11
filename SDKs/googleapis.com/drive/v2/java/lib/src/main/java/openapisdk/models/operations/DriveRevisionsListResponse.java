package openapisdk.models.operations;



public class DriveRevisionsListResponse {
    public String contentType;
    public DriveRevisionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RevisionList revisionList;
    public DriveRevisionsListResponse withRevisionList(openapisdk.models.shared.RevisionList revisionList) {
        this.revisionList = revisionList;
        return this;
    }
    public Long statusCode;
    public DriveRevisionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}