package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLunsResponse
 * Response message containing the list of storage volume luns.
**/
public class ListLunsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("luns")
    public Lun[] luns;
    public ListLunsResponse withLuns(Lun[] luns) {
        this.luns = luns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListLunsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListLunsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}