package openapisdk.models.operations;



public class GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse {
    public String contentType;
    public GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}