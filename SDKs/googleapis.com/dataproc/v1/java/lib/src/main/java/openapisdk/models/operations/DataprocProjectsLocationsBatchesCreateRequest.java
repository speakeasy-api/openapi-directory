package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DataprocProjectsLocationsBatchesCreateRequest {
    public DataprocProjectsLocationsBatchesCreatePathParams pathParams;
    public DataprocProjectsLocationsBatchesCreateRequest withPathParams(DataprocProjectsLocationsBatchesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DataprocProjectsLocationsBatchesCreateQueryParams queryParams;
    public DataprocProjectsLocationsBatchesCreateRequest withQueryParams(DataprocProjectsLocationsBatchesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchInput request;
    public DataprocProjectsLocationsBatchesCreateRequest withRequest(openapisdk.models.shared.BatchInput request) {
        this.request = request;
        return this;
    }
    public DataprocProjectsLocationsBatchesCreateSecurity security;
    public DataprocProjectsLocationsBatchesCreateRequest withSecurity(DataprocProjectsLocationsBatchesCreateSecurity security) {
        this.security = security;
        return this;
    }
}