package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Activities
 * User's activities.
**/
public class Activities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public ActivitiesCollection[] collection;
    public Activities withCollection(ActivitiesCollection[] collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("future_href")
    public String futureHref;
    public Activities withFutureHref(String futureHref) {
        this.futureHref = futureHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_href")
    public String nextHref;
    public Activities withNextHref(String nextHref) {
        this.nextHref = nextHref;
        return this;
    }
}