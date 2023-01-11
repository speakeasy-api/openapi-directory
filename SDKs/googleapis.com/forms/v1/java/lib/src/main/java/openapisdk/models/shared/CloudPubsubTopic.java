package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudPubsubTopic
 * A Pub/Sub topic.
**/
public class CloudPubsubTopic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicName")
    public String topicName;
    public CloudPubsubTopic withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
}