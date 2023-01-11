package openapisdk.models.operations;



public class BigqueryconnectionProjectsLocationsConnectionsCreateResponse {
    public openapisdk.models.shared.Connection connection;
    public BigqueryconnectionProjectsLocationsConnectionsCreateResponse withConnection(openapisdk.models.shared.Connection connection) {
        this.connection = connection;
        return this;
    }
    public String contentType;
    public BigqueryconnectionProjectsLocationsConnectionsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BigqueryconnectionProjectsLocationsConnectionsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}