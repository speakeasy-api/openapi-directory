package openapisdk.models.operations;



public class DfareportingChangeLogsGetRequest {
    public DfareportingChangeLogsGetPathParams pathParams;
    public DfareportingChangeLogsGetRequest withPathParams(DfareportingChangeLogsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingChangeLogsGetQueryParams queryParams;
    public DfareportingChangeLogsGetRequest withQueryParams(DfareportingChangeLogsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingChangeLogsGetSecurity security;
    public DfareportingChangeLogsGetRequest withSecurity(DfareportingChangeLogsGetSecurity security) {
        this.security = security;
        return this;
    }
}