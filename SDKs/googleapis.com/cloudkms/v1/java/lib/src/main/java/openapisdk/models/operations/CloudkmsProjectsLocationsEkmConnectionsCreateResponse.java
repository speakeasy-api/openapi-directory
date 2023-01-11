package openapisdk.models.operations;



public class CloudkmsProjectsLocationsEkmConnectionsCreateResponse {
    public String contentType;
    public CloudkmsProjectsLocationsEkmConnectionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EkmConnection ekmConnection;
    public CloudkmsProjectsLocationsEkmConnectionsCreateResponse withEkmConnection(openapisdk.models.shared.EkmConnection ekmConnection) {
        this.ekmConnection = ekmConnection;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsEkmConnectionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}