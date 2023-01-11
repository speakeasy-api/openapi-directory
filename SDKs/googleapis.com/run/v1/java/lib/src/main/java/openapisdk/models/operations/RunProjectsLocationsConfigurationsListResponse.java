package openapisdk.models.operations;



public class RunProjectsLocationsConfigurationsListResponse {
    public String contentType;
    public RunProjectsLocationsConfigurationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConfigurationsResponse listConfigurationsResponse;
    public RunProjectsLocationsConfigurationsListResponse withListConfigurationsResponse(openapisdk.models.shared.ListConfigurationsResponse listConfigurationsResponse) {
        this.listConfigurationsResponse = listConfigurationsResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsConfigurationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}