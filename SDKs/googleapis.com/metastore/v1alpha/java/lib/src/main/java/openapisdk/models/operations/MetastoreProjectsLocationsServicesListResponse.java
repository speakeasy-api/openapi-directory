package openapisdk.models.operations;



public class MetastoreProjectsLocationsServicesListResponse {
    public String contentType;
    public MetastoreProjectsLocationsServicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListServicesResponse listServicesResponse;
    public MetastoreProjectsLocationsServicesListResponse withListServicesResponse(openapisdk.models.shared.ListServicesResponse listServicesResponse) {
        this.listServicesResponse = listServicesResponse;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsServicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}