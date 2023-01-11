package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasehostingOperationsCancelRequest {
    public FirebasehostingOperationsCancelPathParams pathParams;
    public FirebasehostingOperationsCancelRequest withPathParams(FirebasehostingOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasehostingOperationsCancelQueryParams queryParams;
    public FirebasehostingOperationsCancelRequest withQueryParams(FirebasehostingOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public FirebasehostingOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}