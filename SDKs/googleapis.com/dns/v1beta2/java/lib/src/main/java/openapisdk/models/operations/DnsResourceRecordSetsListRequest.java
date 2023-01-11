package openapisdk.models.operations;



public class DnsResourceRecordSetsListRequest {
    public DnsResourceRecordSetsListPathParams pathParams;
    public DnsResourceRecordSetsListRequest withPathParams(DnsResourceRecordSetsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DnsResourceRecordSetsListQueryParams queryParams;
    public DnsResourceRecordSetsListRequest withQueryParams(DnsResourceRecordSetsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DnsResourceRecordSetsListSecurity security;
    public DnsResourceRecordSetsListRequest withSecurity(DnsResourceRecordSetsListSecurity security) {
        this.security = security;
        return this;
    }
}