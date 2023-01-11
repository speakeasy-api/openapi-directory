package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemotebuildexecutionProjectsInstancesCreateRequest {
    public RemotebuildexecutionProjectsInstancesCreatePathParams pathParams;
    public RemotebuildexecutionProjectsInstancesCreateRequest withPathParams(RemotebuildexecutionProjectsInstancesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemotebuildexecutionProjectsInstancesCreateQueryParams queryParams;
    public RemotebuildexecutionProjectsInstancesCreateRequest withQueryParams(RemotebuildexecutionProjectsInstancesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest request;
    public RemotebuildexecutionProjectsInstancesCreateRequest withRequest(openapisdk.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest request) {
        this.request = request;
        return this;
    }
    public RemotebuildexecutionProjectsInstancesCreateSecurity security;
    public RemotebuildexecutionProjectsInstancesCreateRequest withSecurity(RemotebuildexecutionProjectsInstancesCreateSecurity security) {
        this.security = security;
        return this;
    }
}