package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesCloneRequest {
    public SqlInstancesClonePathParams pathParams;
    public SqlInstancesCloneRequest withPathParams(SqlInstancesClonePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesCloneQueryParams queryParams;
    public SqlInstancesCloneRequest withQueryParams(SqlInstancesCloneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstancesCloneRequest request;
    public SqlInstancesCloneRequest withRequest(openapisdk.models.shared.InstancesCloneRequest request) {
        this.request = request;
        return this;
    }
    public SqlInstancesCloneSecurity security;
    public SqlInstancesCloneRequest withSecurity(SqlInstancesCloneSecurity security) {
        this.security = security;
        return this;
    }
}