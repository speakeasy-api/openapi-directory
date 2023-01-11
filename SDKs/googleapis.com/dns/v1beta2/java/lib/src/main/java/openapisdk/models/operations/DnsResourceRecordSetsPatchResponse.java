package openapisdk.models.operations;



public class DnsResourceRecordSetsPatchResponse {
    public String contentType;
    public DnsResourceRecordSetsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ResourceRecordSet resourceRecordSet;
    public DnsResourceRecordSetsPatchResponse withResourceRecordSet(openapisdk.models.shared.ResourceRecordSet resourceRecordSet) {
        this.resourceRecordSet = resourceRecordSet;
        return this;
    }
    public Long statusCode;
    public DnsResourceRecordSetsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}