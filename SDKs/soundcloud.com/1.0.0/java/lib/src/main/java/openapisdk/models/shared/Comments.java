package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Comments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public Comment[] collection;
    public Comments withCollection(Comment[] collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_href")
    public String nextHref;
    public Comments withNextHref(String nextHref) {
        this.nextHref = nextHref;
        return this;
    }
}