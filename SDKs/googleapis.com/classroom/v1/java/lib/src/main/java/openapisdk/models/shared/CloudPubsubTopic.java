package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudPubsubTopic
 * A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
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