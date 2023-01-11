package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DnsResourceRecordSetsPatchRequest {
    public DnsResourceRecordSetsPatchPathParams pathParams;
    public DnsResourceRecordSetsPatchRequest withPathParams(DnsResourceRecordSetsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResourceRecordSetsPatchQueryParams queryParams;
    public DnsResourceRecordSetsPatchRequest withQueryParams(DnsResourceRecordSetsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResourceRecordSet request;
    public DnsResourceRecordSetsPatchRequest withRequest(openapisdk.models.shared.ResourceRecordSet request) {
        this.request = request;
        return this;
    }
    public DnsResourceRecordSetsPatchSecurity security;
    public DnsResourceRecordSetsPatchRequest withSecurity(DnsResourceRecordSetsPatchSecurity security) {
        this.security = security;
        return this;
    }
}