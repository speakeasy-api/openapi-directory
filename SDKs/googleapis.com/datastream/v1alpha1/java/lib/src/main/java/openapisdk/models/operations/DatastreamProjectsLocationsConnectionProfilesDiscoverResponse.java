package openapisdk.models.operations;



public class DatastreamProjectsLocationsConnectionProfilesDiscoverResponse {
    public String contentType;
    public DatastreamProjectsLocationsConnectionProfilesDiscoverResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DiscoverConnectionProfileResponse discoverConnectionProfileResponse;
    public DatastreamProjectsLocationsConnectionProfilesDiscoverResponse withDiscoverConnectionProfileResponse(openapisdk.models.shared.DiscoverConnectionProfileResponse discoverConnectionProfileResponse) {
        this.discoverConnectionProfileResponse = discoverConnectionProfileResponse;
        return this;
    }
    public Long statusCode;
    public DatastreamProjectsLocationsConnectionProfilesDiscoverResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}