package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesTruncateLogRequest {
    public SqlInstancesTruncateLogPathParams pathParams;
    public SqlInstancesTruncateLogRequest withPathParams(SqlInstancesTruncateLogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SqlInstancesTruncateLogQueryParams queryParams;
    public SqlInstancesTruncateLogRequest withQueryParams(SqlInstancesTruncateLogQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstancesTruncateLogRequest request;
    public SqlInstancesTruncateLogRequest withRequest(openapisdk.models.shared.InstancesTruncateLogRequest request) {
        this.request = request;
        return this;
    }
    public SqlInstancesTruncateLogSecurity security;
    public SqlInstancesTruncateLogRequest withSecurity(SqlInstancesTruncateLogSecurity security) {
        this.security = security;
        return this;
    }
}