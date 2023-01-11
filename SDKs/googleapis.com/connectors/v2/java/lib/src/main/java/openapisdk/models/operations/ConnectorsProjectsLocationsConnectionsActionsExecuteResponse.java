package openapisdk.models.operations;



public class ConnectorsProjectsLocationsConnectionsActionsExecuteResponse {
    public String contentType;
    public ConnectorsProjectsLocationsConnectionsActionsExecuteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExecuteActionResponse executeActionResponse;
    public ConnectorsProjectsLocationsConnectionsActionsExecuteResponse withExecuteActionResponse(openapisdk.models.shared.ExecuteActionResponse executeActionResponse) {
        this.executeActionResponse = executeActionResponse;
        return this;
    }
    public Long statusCode;
    public ConnectorsProjectsLocationsConnectionsActionsExecuteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}