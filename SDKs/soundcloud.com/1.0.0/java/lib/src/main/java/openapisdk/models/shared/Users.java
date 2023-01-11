package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Users {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public User[] collection;
    public Users withCollection(User[] collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_href")
    public String nextHref;
    public Users withNextHref(String nextHref) {
        this.nextHref = nextHref;
        return this;
    }
}