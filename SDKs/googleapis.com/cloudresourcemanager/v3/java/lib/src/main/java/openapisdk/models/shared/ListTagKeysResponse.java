package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagKeysResponse
 * The ListTagKeys response message.
**/
public class ListTagKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTagKeysResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagKeys")
    public TagKey[] tagKeys;
    public ListTagKeysResponse withTagKeys(TagKey[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
}