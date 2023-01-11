package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionOperationsCancelRequest {
    public BaremetalsolutionOperationsCancelPathParams pathParams;
    public BaremetalsolutionOperationsCancelRequest withPathParams(BaremetalsolutionOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionOperationsCancelQueryParams queryParams;
    public BaremetalsolutionOperationsCancelRequest withQueryParams(BaremetalsolutionOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public BaremetalsolutionOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionOperationsCancelSecurity security;
    public BaremetalsolutionOperationsCancelRequest withSecurity(BaremetalsolutionOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}