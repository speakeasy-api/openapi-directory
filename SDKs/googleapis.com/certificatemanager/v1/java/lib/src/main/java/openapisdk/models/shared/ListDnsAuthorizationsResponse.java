package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDnsAuthorizationsResponse
 * Response for the `ListDnsAuthorizations` method.
**/
public class ListDnsAuthorizationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsAuthorizations")
    public DnsAuthorization[] dnsAuthorizations;
    public ListDnsAuthorizationsResponse withDnsAuthorizations(DnsAuthorization[] dnsAuthorizations) {
        this.dnsAuthorizations = dnsAuthorizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDnsAuthorizationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListDnsAuthorizationsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}