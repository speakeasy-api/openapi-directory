package openapisdk.models.operations;



public class GkebackupProjectsLocationsRestorePlansCreateResponse {
    public String contentType;
    public GkebackupProjectsLocationsRestorePlansCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public GkebackupProjectsLocationsRestorePlansCreateResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsRestorePlansCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}