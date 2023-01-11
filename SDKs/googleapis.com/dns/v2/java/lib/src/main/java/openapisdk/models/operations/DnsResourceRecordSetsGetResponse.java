package openapisdk.models.operations;



public class DnsResourceRecordSetsGetResponse {
    public String contentType;
    public DnsResourceRecordSetsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceRecordSet resourceRecordSet;
    public DnsResourceRecordSetsGetResponse withResourceRecordSet(openapisdk.models.shared.ResourceRecordSet resourceRecordSet) {
        this.resourceRecordSet = resourceRecordSet;
        return this;
    }
    public Long statusCode;
    public DnsResourceRecordSetsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}