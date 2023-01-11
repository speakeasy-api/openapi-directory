package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HmacKeysMetadata
 * A list of hmacKeys.
**/
public class HmacKeysMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public HmacKeyMetadata[] items;
    public HmacKeysMetadata withItems(HmacKeyMetadata[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public HmacKeysMetadata withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public HmacKeysMetadata withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}