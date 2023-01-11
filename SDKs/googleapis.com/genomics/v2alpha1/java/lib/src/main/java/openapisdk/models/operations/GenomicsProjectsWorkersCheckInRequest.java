package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenomicsProjectsWorkersCheckInRequest {
    public GenomicsProjectsWorkersCheckInPathParams pathParams;
    public GenomicsProjectsWorkersCheckInRequest withPathParams(GenomicsProjectsWorkersCheckInPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GenomicsProjectsWorkersCheckInQueryParams queryParams;
    public GenomicsProjectsWorkersCheckInRequest withQueryParams(GenomicsProjectsWorkersCheckInQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CheckInRequest request;
    public GenomicsProjectsWorkersCheckInRequest withRequest(openapisdk.models.shared.CheckInRequest request) {
        this.request = request;
        return this;
    }
    public GenomicsProjectsWorkersCheckInSecurity security;
    public GenomicsProjectsWorkersCheckInRequest withSecurity(GenomicsProjectsWorkersCheckInSecurity security) {
        this.security = security;
        return this;
    }
}