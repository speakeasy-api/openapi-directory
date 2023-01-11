package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesUpdateRequest {
    public SqlInstancesUpdatePathParams pathParams;
    public SqlInstancesUpdateRequest withPathParams(SqlInstancesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesUpdateQueryParams queryParams;
    public SqlInstancesUpdateRequest withQueryParams(SqlInstancesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DatabaseInstanceInput request;
    public SqlInstancesUpdateRequest withRequest(openapisdk.models.shared.DatabaseInstanceInput request) {
        this.request = request;
        return this;
    }
    public SqlInstancesUpdateSecurity security;
    public SqlInstancesUpdateRequest withSecurity(SqlInstancesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}