package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObjectActor
 * If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
**/
public class ActivityObjectActor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSpecificActorInfo")
    public ActivityObjectActorClientSpecificActorInfo clientSpecificActorInfo;
    public ActivityObjectActor withClientSpecificActorInfo(ActivityObjectActorClientSpecificActorInfo clientSpecificActorInfo) {
        this.clientSpecificActorInfo = clientSpecificActorInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ActivityObjectActor withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ActivityObjectActor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ActivityObjectActorImage image;
    public ActivityObjectActor withImage(ActivityObjectActorImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ActivityObjectActor withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification")
    public ActivityObjectActorVerification verification;
    public ActivityObjectActor withVerification(ActivityObjectActorVerification verification) {
        this.verification = verification;
        return this;
    }
}