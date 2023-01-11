package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudchannelOperationsCancelRequest {
    public CloudchannelOperationsCancelPathParams pathParams;
    public CloudchannelOperationsCancelRequest withPathParams(CloudchannelOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudchannelOperationsCancelQueryParams queryParams;
    public CloudchannelOperationsCancelRequest withQueryParams(CloudchannelOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudchannelOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudchannelOperationsCancelSecurity security;
    public CloudchannelOperationsCancelRequest withSecurity(CloudchannelOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}