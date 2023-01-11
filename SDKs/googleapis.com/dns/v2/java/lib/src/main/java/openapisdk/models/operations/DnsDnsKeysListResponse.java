package openapisdk.models.operations;



public class DnsDnsKeysListResponse {
    public String contentType;
    public DnsDnsKeysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DnsKeysListResponse dnsKeysListResponse;
    public DnsDnsKeysListResponse withDnsKeysListResponse(openapisdk.models.shared.DnsKeysListResponse dnsKeysListResponse) {
        this.dnsKeysListResponse = dnsKeysListResponse;
        return this;
    }
    public Long statusCode;
    public DnsDnsKeysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}