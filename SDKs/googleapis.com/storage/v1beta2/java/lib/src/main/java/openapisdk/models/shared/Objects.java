package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Objects
 * A list of objects.
**/
public class Objects {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Object[] items;
    public Objects withItems(Object[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Objects withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public Objects withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefixes")
    public String[] prefixes;
    public Objects withPrefixes(String[] prefixes) {
        this.prefixes = prefixes;
        return this;
    }
}