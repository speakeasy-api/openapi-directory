package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultOperationsCancelRequest {
    public VaultOperationsCancelPathParams pathParams;
    public VaultOperationsCancelRequest withPathParams(VaultOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VaultOperationsCancelQueryParams queryParams;
    public VaultOperationsCancelRequest withQueryParams(VaultOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public VaultOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}