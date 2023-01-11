package openapisdk.models.operations;



public class CloudkmsProjectsLocationsEkmConnectionsListResponse {
    public String contentType;
    public CloudkmsProjectsLocationsEkmConnectionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListEkmConnectionsResponse listEkmConnectionsResponse;
    public CloudkmsProjectsLocationsEkmConnectionsListResponse withListEkmConnectionsResponse(openapisdk.models.shared.ListEkmConnectionsResponse listEkmConnectionsResponse) {
        this.listEkmConnectionsResponse = listEkmConnectionsResponse;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsEkmConnectionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}