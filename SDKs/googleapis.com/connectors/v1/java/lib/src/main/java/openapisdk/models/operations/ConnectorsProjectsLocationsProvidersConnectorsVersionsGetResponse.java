package openapisdk.models.operations;



public class ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse {
    public openapisdk.models.shared.ConnectorVersion connectorVersion;
    public ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse withConnectorVersion(openapisdk.models.shared.ConnectorVersion connectorVersion) {
        this.connectorVersion = connectorVersion;
        return this;
    }
    public String contentType;
    public ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}