package openapisdk.models.operations;



public class DatastreamProjectsLocationsConnectionProfilesListResponse {
    public String contentType;
    public DatastreamProjectsLocationsConnectionProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConnectionProfilesResponse listConnectionProfilesResponse;
    public DatastreamProjectsLocationsConnectionProfilesListResponse withListConnectionProfilesResponse(openapisdk.models.shared.ListConnectionProfilesResponse listConnectionProfilesResponse) {
        this.listConnectionProfilesResponse = listConnectionProfilesResponse;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsConnectionProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}