package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Activity
 * JSON template for the activity resource.
**/
public class Activity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor")
    public ActivityActor actor;
    public Activity withActor(ActivityActor actor) {
        this.actor = actor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Activity withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public ActivityEvents[] events;
    public Activity withEvents(ActivityEvents[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public ActivityId id;
    public Activity withId(ActivityId id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public Activity withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Activity withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerDomain")
    public String ownerDomain;
    public Activity withOwnerDomain(String ownerDomain) {
        this.ownerDomain = ownerDomain;
        return this;
    }
}