package openapisdk.models.operations;



public class ContactcenterinsightsProjectsLocationsInsightsdataExportResponse {
    public String contentType;
    public ContactcenterinsightsProjectsLocationsInsightsdataExportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation;
    public ContactcenterinsightsProjectsLocationsInsightsdataExportResponse withGoogleLongrunningOperation(openapisdk.models.shared.GoogleLongrunningOperation googleLongrunningOperation) {
        this.googleLongrunningOperation = googleLongrunningOperation;
        return this;
    }
    public Long statusCode;
    public ContactcenterinsightsProjectsLocationsInsightsdataExportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}