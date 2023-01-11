package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Registration
 * An instruction to Classroom to send notifications from the `feed` to the provided destination.
**/
public class Registration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudPubsubTopic")
    public CloudPubsubTopic cloudPubsubTopic;
    public Registration withCloudPubsubTopic(CloudPubsubTopic cloudPubsubTopic) {
        this.cloudPubsubTopic = cloudPubsubTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiryTime")
    public String expiryTime;
    public Registration withExpiryTime(String expiryTime) {
        this.expiryTime = expiryTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feed")
    public Feed feed;
    public Registration withFeed(Feed feed) {
        this.feed = feed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationId")
    public String registrationId;
    public Registration withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
}