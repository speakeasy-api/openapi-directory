package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListNfsSharesResponse
 * Response message containing the list of NFS shares.
**/
public class ListNfsSharesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListNfsSharesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nfsShares")
    public NfsShare[] nfsShares;
    public ListNfsSharesResponse withNfsShares(NfsShare[] nfsShares) {
        this.nfsShares = nfsShares;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListNfsSharesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}