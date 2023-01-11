package openapisdk.models.operations;



public class ConnectorsProjectsLocationsConnectionsExecuteSqlQueryResponse {
    public String contentType;
    public ConnectorsProjectsLocationsConnectionsExecuteSqlQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExecuteSqlQueryResponse executeSqlQueryResponse;
    public ConnectorsProjectsLocationsConnectionsExecuteSqlQueryResponse withExecuteSqlQueryResponse(openapisdk.models.shared.ExecuteSqlQueryResponse executeSqlQueryResponse) {
        this.executeSqlQueryResponse = executeSqlQueryResponse;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsConnectionsExecuteSqlQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}