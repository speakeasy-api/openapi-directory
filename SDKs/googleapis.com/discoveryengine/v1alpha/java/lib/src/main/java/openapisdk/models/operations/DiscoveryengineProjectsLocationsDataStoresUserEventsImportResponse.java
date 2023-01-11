package openapisdk.models.operations;



public class DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse {
    public String contentType;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsImportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}