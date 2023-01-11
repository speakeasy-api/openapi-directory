package openapisdk.models.operations;



public class BigqueryconnectionProjectsLocationsConnectionsGetResponse {
    public openapisdk.models.shared.Connection connection;
    public BigqueryconnectionProjectsLocationsConnectionsGetResponse withConnection(openapisdk.models.shared.Connection connection) {
        this.connection = connection;
        return this;
    }
    public String contentType;
    public BigqueryconnectionProjectsLocationsConnectionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BigqueryconnectionProjectsLocationsConnectionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}