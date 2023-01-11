package openapisdk.models.operations;



public class RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse {
    public String contentType;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse googleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse withGoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse(openapisdk.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse googleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse) {
        this.googleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse = googleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse;
        return this;
    }
    public Long statusCode;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}