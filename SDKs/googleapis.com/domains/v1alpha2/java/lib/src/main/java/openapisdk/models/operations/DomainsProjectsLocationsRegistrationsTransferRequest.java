package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsTransferRequest {
    public DomainsProjectsLocationsRegistrationsTransferPathParams pathParams;
    public DomainsProjectsLocationsRegistrationsTransferRequest withPathParams(DomainsProjectsLocationsRegistrationsTransferPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsTransferQueryParams queryParams;
    public DomainsProjectsLocationsRegistrationsTransferRequest withQueryParams(DomainsProjectsLocationsRegistrationsTransferQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferDomainRequestInput request;
    public DomainsProjectsLocationsRegistrationsTransferRequest withRequest(openapisdk.models.shared.TransferDomainRequestInput request) {
        this.request = request;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsTransferSecurity security;
    public DomainsProjectsLocationsRegistrationsTransferRequest withSecurity(DomainsProjectsLocationsRegistrationsTransferSecurity security) {
        this.security = security;
        return this;
    }
}