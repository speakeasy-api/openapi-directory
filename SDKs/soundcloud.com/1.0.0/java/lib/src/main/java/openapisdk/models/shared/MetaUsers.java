package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MetaUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public MetaUser[] collection;
    public MetaUsers withCollection(MetaUser[] collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_href")
    public String nextHref;
    public MetaUsers withNextHref(String nextHref) {
        this.nextHref = nextHref;
        return this;
    }
}