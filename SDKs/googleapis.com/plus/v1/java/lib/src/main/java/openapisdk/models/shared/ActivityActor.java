package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityActor
 * The person who performed this activity.
**/
public class ActivityActor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSpecificActorInfo")
    public ActivityActorClientSpecificActorInfo clientSpecificActorInfo;
    public ActivityActor withClientSpecificActorInfo(ActivityActorClientSpecificActorInfo clientSpecificActorInfo) {
        this.clientSpecificActorInfo = clientSpecificActorInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ActivityActor withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ActivityActor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ActivityActorImage image;
    public ActivityActor withImage(ActivityActorImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public ActivityActorName name;
    public ActivityActor withName(ActivityActorName name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ActivityActor withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification")
    public ActivityActorVerification verification;
    public ActivityActor withVerification(ActivityActorVerification verification) {
        this.verification = verification;
        return this;
    }
}