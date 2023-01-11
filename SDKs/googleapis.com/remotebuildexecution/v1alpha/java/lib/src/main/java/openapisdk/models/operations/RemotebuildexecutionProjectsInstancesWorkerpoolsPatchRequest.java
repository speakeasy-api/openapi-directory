package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest {
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams pathParams;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest withPathParams(RemotebuildexecutionProjectsInstancesWorkerpoolsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams queryParams;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest withQueryParams(RemotebuildexecutionProjectsInstancesWorkerpoolsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest request;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest withRequest(openapisdk.models.shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest request) {
        this.request = request;
        return this;
    }
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity security;
    public RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest withSecurity(RemotebuildexecutionProjectsInstancesWorkerpoolsPatchSecurity security) {
        this.security = security;
        return this;
    }
}