package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenomicsProjectsOperationsCancelRequest {
    public GenomicsProjectsOperationsCancelPathParams pathParams;
    public GenomicsProjectsOperationsCancelRequest withPathParams(GenomicsProjectsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GenomicsProjectsOperationsCancelQueryParams queryParams;
    public GenomicsProjectsOperationsCancelRequest withQueryParams(GenomicsProjectsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GenomicsProjectsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public GenomicsProjectsOperationsCancelSecurity security;
    public GenomicsProjectsOperationsCancelRequest withSecurity(GenomicsProjectsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}