package openapisdk.models.operations;



public class GkebackupProjectsLocationsBackupPlansCreateResponse {
    public String contentType;
    public GkebackupProjectsLocationsBackupPlansCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public GkebackupProjectsLocationsBackupPlansCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsBackupPlansCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}