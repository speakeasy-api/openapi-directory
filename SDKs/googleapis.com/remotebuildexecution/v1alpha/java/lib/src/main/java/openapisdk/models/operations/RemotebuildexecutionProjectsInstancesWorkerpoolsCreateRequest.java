package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest {
    public RemotebuildexecutionProjectsInstancesWorkerpoolsCreatePathParams pathParams;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest withPathParams(RemotebuildexecutionProjectsInstancesWorkerpoolsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams queryParams;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest withQueryParams(RemotebuildexecutionProjectsInstancesWorkerpoolsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest request;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest withRequest(openapisdk.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest request) {
        this.request = request;
        return this;
    }
    public RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity security;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest withSecurity(RemotebuildexecutionProjectsInstancesWorkerpoolsCreateSecurity security) {
        this.security = security;
        return this;
    }
}