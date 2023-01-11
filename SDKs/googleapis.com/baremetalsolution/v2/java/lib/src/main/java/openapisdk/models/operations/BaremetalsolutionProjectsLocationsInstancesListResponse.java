package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsInstancesListResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsInstancesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListInstancesResponse listInstancesResponse;
    public BaremetalsolutionProjectsLocationsInstancesListResponse withListInstancesResponse(openapisdk.models.shared.ListInstancesResponse listInstancesResponse) {
        this.listInstancesResponse = listInstancesResponse;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsInstancesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}