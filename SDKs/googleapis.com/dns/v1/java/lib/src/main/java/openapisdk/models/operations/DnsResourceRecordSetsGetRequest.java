package openapisdk.models.operations;



public class DnsResourceRecordSetsGetRequest {
    public DnsResourceRecordSetsGetPathParams pathParams;
    public DnsResourceRecordSetsGetRequest withPathParams(DnsResourceRecordSetsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResourceRecordSetsGetQueryParams queryParams;
    public DnsResourceRecordSetsGetRequest withQueryParams(DnsResourceRecordSetsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsResourceRecordSetsGetSecurity security;
    public DnsResourceRecordSetsGetRequest withSecurity(DnsResourceRecordSetsGetSecurity security) {
        this.security = security;
        return this;
    }
}