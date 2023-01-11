package openapisdk.models.operations;



public class VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse {
    public String contentType;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDatacenterConnectorsResponse listDatacenterConnectorsResponse;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse withListDatacenterConnectorsResponse(openapisdk.models.shared.ListDatacenterConnectorsResponse listDatacenterConnectorsResponse) {
        this.listDatacenterConnectorsResponse = listDatacenterConnectorsResponse;
        return this;
    }
    public Long statusCode;
    public VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}