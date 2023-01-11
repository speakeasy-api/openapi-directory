package openapisdk.models.operations;



public class DatamigrationProjectsLocationsConnectionProfilesListResponse {
    public String contentType;
    public DatamigrationProjectsLocationsConnectionProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConnectionProfilesResponse listConnectionProfilesResponse;
    public DatamigrationProjectsLocationsConnectionProfilesListResponse withListConnectionProfilesResponse(openapisdk.models.shared.ListConnectionProfilesResponse listConnectionProfilesResponse) {
        this.listConnectionProfilesResponse = listConnectionProfilesResponse;
        return this;
    }
    public Long statusCode;
    public DatamigrationProjectsLocationsConnectionProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}