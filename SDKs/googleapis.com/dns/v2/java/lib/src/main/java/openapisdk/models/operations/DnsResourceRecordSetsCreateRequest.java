package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResourceRecordSetsCreateRequest {
    public DnsResourceRecordSetsCreatePathParams pathParams;
    public DnsResourceRecordSetsCreateRequest withPathParams(DnsResourceRecordSetsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResourceRecordSetsCreateQueryParams queryParams;
    public DnsResourceRecordSetsCreateRequest withQueryParams(DnsResourceRecordSetsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResourceRecordSet request;
    public DnsResourceRecordSetsCreateRequest withRequest(openapisdk.models.shared.ResourceRecordSet request) {
        this.request = request;
        return this;
    }
    public DnsResourceRecordSetsCreateSecurity security;
    public DnsResourceRecordSetsCreateRequest withSecurity(DnsResourceRecordSetsCreateSecurity security) {
        this.security = security;
        return this;
    }
}