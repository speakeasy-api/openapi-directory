package openapisdk.models.operations;



public class DnsResourceRecordSetsListResponse {
    public String contentType;
    public DnsResourceRecordSetsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceRecordSetsListResponse resourceRecordSetsListResponse;
    public DnsResourceRecordSetsListResponse withResourceRecordSetsListResponse(openapisdk.models.shared.ResourceRecordSetsListResponse resourceRecordSetsListResponse) {
        this.resourceRecordSetsListResponse = resourceRecordSetsListResponse;
        return this;
    }
    public Long statusCode;
    public DnsResourceRecordSetsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}