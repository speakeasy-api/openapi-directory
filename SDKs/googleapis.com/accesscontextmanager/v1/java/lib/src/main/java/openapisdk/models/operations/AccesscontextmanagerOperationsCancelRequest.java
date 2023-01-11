package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerOperationsCancelRequest {
    public AccesscontextmanagerOperationsCancelPathParams pathParams;
    public AccesscontextmanagerOperationsCancelRequest withPathParams(AccesscontextmanagerOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerOperationsCancelQueryParams queryParams;
    public AccesscontextmanagerOperationsCancelRequest withQueryParams(AccesscontextmanagerOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AccesscontextmanagerOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerOperationsCancelSecurity security;
    public AccesscontextmanagerOperationsCancelRequest withSecurity(AccesscontextmanagerOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}