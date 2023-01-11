package openapisdk.models.operations;



public class GkebackupProjectsLocationsRestorePlansRestoresPatchResponse {
    public String contentType;
    public GkebackupProjectsLocationsRestorePlansRestoresPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public GkebackupProjectsLocationsRestorePlansRestoresPatchResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsRestorePlansRestoresPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}