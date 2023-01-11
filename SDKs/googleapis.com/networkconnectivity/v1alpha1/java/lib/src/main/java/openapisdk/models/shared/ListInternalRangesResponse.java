package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInternalRangesResponse
 * Response for InternalRange.ListInternalRanges
**/
public class ListInternalRangesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internalRanges")
    public InternalRange[] internalRanges;
    public ListInternalRangesResponse withInternalRanges(InternalRange[] internalRanges) {
        this.internalRanges = internalRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInternalRangesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListInternalRangesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}