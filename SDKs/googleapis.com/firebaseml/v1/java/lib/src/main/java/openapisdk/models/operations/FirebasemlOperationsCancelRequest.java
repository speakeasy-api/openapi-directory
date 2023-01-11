package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebasemlOperationsCancelRequest {
    public FirebasemlOperationsCancelPathParams pathParams;
    public FirebasemlOperationsCancelRequest withPathParams(FirebasemlOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebasemlOperationsCancelQueryParams queryParams;
    public FirebasemlOperationsCancelRequest withQueryParams(FirebasemlOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public FirebasemlOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public FirebasemlOperationsCancelSecurity security;
    public FirebasemlOperationsCancelRequest withSecurity(FirebasemlOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}