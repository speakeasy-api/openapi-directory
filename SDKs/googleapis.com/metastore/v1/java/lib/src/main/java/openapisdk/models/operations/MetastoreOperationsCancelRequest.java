package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreOperationsCancelRequest {
    public MetastoreOperationsCancelPathParams pathParams;
    public MetastoreOperationsCancelRequest withPathParams(MetastoreOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreOperationsCancelQueryParams queryParams;
    public MetastoreOperationsCancelRequest withQueryParams(MetastoreOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public MetastoreOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public MetastoreOperationsCancelSecurity security;
    public MetastoreOperationsCancelRequest withSecurity(MetastoreOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}