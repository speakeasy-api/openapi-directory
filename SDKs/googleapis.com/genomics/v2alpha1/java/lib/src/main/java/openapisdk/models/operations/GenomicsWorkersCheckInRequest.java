package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenomicsWorkersCheckInRequest {
    public GenomicsWorkersCheckInPathParams pathParams;
    public GenomicsWorkersCheckInRequest withPathParams(GenomicsWorkersCheckInPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GenomicsWorkersCheckInQueryParams queryParams;
    public GenomicsWorkersCheckInRequest withQueryParams(GenomicsWorkersCheckInQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CheckInRequest request;
    public GenomicsWorkersCheckInRequest withRequest(openapisdk.models.shared.CheckInRequest request) {
        this.request = request;
        return this;
    }
    public GenomicsWorkersCheckInSecurity security;
    public GenomicsWorkersCheckInRequest withSecurity(GenomicsWorkersCheckInSecurity security) {
        this.security = security;
        return this;
    }
}