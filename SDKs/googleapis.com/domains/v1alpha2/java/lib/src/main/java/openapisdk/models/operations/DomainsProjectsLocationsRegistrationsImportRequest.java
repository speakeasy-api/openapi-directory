package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsImportRequest {
    public DomainsProjectsLocationsRegistrationsImportPathParams pathParams;
    public DomainsProjectsLocationsRegistrationsImportRequest withPathParams(DomainsProjectsLocationsRegistrationsImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsImportQueryParams queryParams;
    public DomainsProjectsLocationsRegistrationsImportRequest withQueryParams(DomainsProjectsLocationsRegistrationsImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportDomainRequest request;
    public DomainsProjectsLocationsRegistrationsImportRequest withRequest(openapisdk.models.shared.ImportDomainRequest request) {
        this.request = request;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsImportSecurity security;
    public DomainsProjectsLocationsRegistrationsImportRequest withSecurity(DomainsProjectsLocationsRegistrationsImportSecurity security) {
        this.security = security;
        return this;
    }
}