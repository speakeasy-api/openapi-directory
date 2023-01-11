package openapisdk.models.operations;



public class DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse {
    public String contentType;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaUserEvent googleCloudDiscoveryengineV1alphaUserEvent;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse withGoogleCloudDiscoveryengineV1alphaUserEvent(openapisdk.models.shared.GoogleCloudDiscoveryengineV1alphaUserEvent googleCloudDiscoveryengineV1alphaUserEvent) {
        this.googleCloudDiscoveryengineV1alphaUserEvent = googleCloudDiscoveryengineV1alphaUserEvent;
        return this;
    }
    public Long statusCode;
    public DiscoveryengineProjectsLocationsDataStoresUserEventsWriteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}