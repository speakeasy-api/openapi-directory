package openapisdk.models.operations;



public class RemotebuildexecutionProjectsInstancesListResponse {
    public String contentType;
    public RemotebuildexecutionProjectsInstancesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse googleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse;
    public RemotebuildexecutionProjectsInstancesListResponse withGoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse(openapisdk.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse googleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse) {
        this.googleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse = googleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse;
        return this;
    }
    public Long statusCode;
    public RemotebuildexecutionProjectsInstancesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}