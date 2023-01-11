package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsChangesCreateRequest {
    public DnsChangesCreatePathParams pathParams;
    public DnsChangesCreateRequest withPathParams(DnsChangesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsChangesCreateQueryParams queryParams;
    public DnsChangesCreateRequest withQueryParams(DnsChangesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Change request;
    public DnsChangesCreateRequest withRequest(openapisdk.models.shared.Change request) {
        this.request = request;
        return this;
    }
    public DnsChangesCreateSecurity security;
    public DnsChangesCreateRequest withSecurity(DnsChangesCreateSecurity security) {
        this.security = security;
        return this;
    }
}