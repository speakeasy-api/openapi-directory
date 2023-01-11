package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCaPoolsResponse
 * Response message for CertificateAuthorityService.ListCaPools.
**/
public class ListCaPoolsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caPools")
    public CaPool[] caPools;
    public ListCaPoolsResponse withCaPools(CaPool[] caPools) {
        this.caPools = caPools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCaPoolsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListCaPoolsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}