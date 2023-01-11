package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEffectiveTagsResponse
 * The response of ListEffectiveTags.
**/
public class ListEffectiveTagsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveTags")
    public EffectiveTag[] effectiveTags;
    public ListEffectiveTagsResponse withEffectiveTags(EffectiveTag[] effectiveTags) {
        this.effectiveTags = effectiveTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListEffectiveTagsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}