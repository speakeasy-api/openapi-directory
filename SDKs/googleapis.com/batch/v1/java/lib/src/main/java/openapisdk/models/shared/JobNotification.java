package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobNotification
 * Notification configurations.
**/
public class JobNotification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public Message message;
    public JobNotification withMessage(Message message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsubTopic")
    public String pubsubTopic;
    public JobNotification withPubsubTopic(String pubsubTopic) {
        this.pubsubTopic = pubsubTopic;
        return this;
    }
}