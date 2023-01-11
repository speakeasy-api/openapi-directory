package openapisdk.models.operations;



public class DnsDnsKeysGetResponse {
    public String contentType;
    public DnsDnsKeysGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DnsKey dnsKey;
    public DnsDnsKeysGetResponse withDnsKey(openapisdk.models.shared.DnsKey dnsKey) {
        this.dnsKey = dnsKey;
        return this;
    }
    public Long statusCode;
    public DnsDnsKeysGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}