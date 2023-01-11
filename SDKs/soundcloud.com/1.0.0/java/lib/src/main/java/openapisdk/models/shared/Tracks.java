package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Tracks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public Track[] collection;
    public Tracks withCollection(Track[] collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_href")
    public String nextHref;
    public Tracks withNextHref(String nextHref) {
        this.nextHref = nextHref;
        return this;
    }
}