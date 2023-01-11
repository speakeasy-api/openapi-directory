package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DfareportingDirectorySitesInsertRequest {
    public DfareportingDirectorySitesInsertPathParams pathParams;
    public DfareportingDirectorySitesInsertRequest withPathParams(DfareportingDirectorySitesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingDirectorySitesInsertQueryParams queryParams;
    public DfareportingDirectorySitesInsertRequest withQueryParams(DfareportingDirectorySitesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DirectorySite request;
    public DfareportingDirectorySitesInsertRequest withRequest(openapisdk.models.shared.DirectorySite request) {
        this.request = request;
        return this;
    }
    public DfareportingDirectorySitesInsertSecurity security;
    public DfareportingDirectorySitesInsertRequest withSecurity(DfareportingDirectorySitesInsertSecurity security) {
        this.security = security;
        return this;
    }
}