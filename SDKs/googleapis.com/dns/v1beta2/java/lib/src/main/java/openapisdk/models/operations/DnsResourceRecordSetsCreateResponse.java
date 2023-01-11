package openapisdk.models.operations;



public class DnsResourceRecordSetsCreateResponse {
    public String contentType;
    public DnsResourceRecordSetsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceRecordSet resourceRecordSet;
    public DnsResourceRecordSetsCreateResponse withResourceRecordSet(openapisdk.models.shared.ResourceRecordSet resourceRecordSet) {
        this.resourceRecordSet = resourceRecordSet;
        return this;
    }
    public Long statusCode;
    public DnsResourceRecordSetsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}