package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Notification
 * Settings for callback notifications. For more details see [Google Workspace Alert Notification](https://developers.google.com/admin-sdk/alertcenter/guides/notifications).
**/
public class Notification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudPubsubTopic")
    public CloudPubsubTopic cloudPubsubTopic;
    public Notification withCloudPubsubTopic(CloudPubsubTopic cloudPubsubTopic) {
        this.cloudPubsubTopic = cloudPubsubTopic;
        return this;
    }
}