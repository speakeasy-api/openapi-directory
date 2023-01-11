package openapisdk.models.operations;



public class VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse {
    public String contentType;
    public VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListUtilizationReportsResponse listUtilizationReportsResponse;
    public VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse withListUtilizationReportsResponse(openapisdk.models.shared.ListUtilizationReportsResponse listUtilizationReportsResponse) {
        this.listUtilizationReportsResponse = listUtilizationReportsResponse;
        return this;
    }
    public Long statusCode;
    public VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}