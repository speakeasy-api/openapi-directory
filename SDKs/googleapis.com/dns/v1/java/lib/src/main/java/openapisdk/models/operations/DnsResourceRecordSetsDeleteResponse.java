package openapisdk.models.operations;



public class DnsResourceRecordSetsDeleteResponse {
    public String contentType;
    public DnsResourceRecordSetsDeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> resourceRecordSetsDeleteResponse;
    public DnsResourceRecordSetsDeleteResponse withResourceRecordSetsDeleteResponse(java.util.Map<String, Object> resourceRecordSetsDeleteResponse) {
        this.resourceRecordSetsDeleteResponse = resourceRecordSetsDeleteResponse;
        return this;
    }
    public Long statusCode;
    public DnsResourceRecordSetsDeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}