package openapisdk.models.operations;



public class DnsResourceRecordSetsDeleteRequest {
    public DnsResourceRecordSetsDeletePathParams pathParams;
    public DnsResourceRecordSetsDeleteRequest withPathParams(DnsResourceRecordSetsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResourceRecordSetsDeleteQueryParams queryParams;
    public DnsResourceRecordSetsDeleteRequest withQueryParams(DnsResourceRecordSetsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsResourceRecordSetsDeleteSecurity security;
    public DnsResourceRecordSetsDeleteRequest withSecurity(DnsResourceRecordSetsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}