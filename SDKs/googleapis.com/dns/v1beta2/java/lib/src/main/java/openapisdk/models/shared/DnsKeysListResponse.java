package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DnsKeysListResponse
 * The response to a request to enumerate DnsKeys in a ManagedZone.
**/
public class DnsKeysListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsKeys")
    public DnsKey[] dnsKeys;
    public DnsKeysListResponse withDnsKeys(DnsKey[] dnsKeys) {
        this.dnsKeys = dnsKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public ResponseHeader header;
    public DnsKeysListResponse withHeader(ResponseHeader header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DnsKeysListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public DnsKeysListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}