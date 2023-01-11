package openapisdk.models.operations;



public class DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse {
    public String contentType;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaUserEvent googleCloudDiscoveryengineV1betaUserEvent;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse withGoogleCloudDiscoveryengineV1betaUserEvent(openapisdk.models.shared.GoogleCloudDiscoveryengineV1betaUserEvent googleCloudDiscoveryengineV1betaUserEvent) {
        this.googleCloudDiscoveryengineV1betaUserEvent = googleCloudDiscoveryengineV1betaUserEvent;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}