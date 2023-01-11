package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Notifications
 * A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account.
**/
public class Notifications {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Notifications withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationTypes")
    public NotificationsNotificationTypesEnum[] notificationTypes;
    public Notifications withNotificationTypes(NotificationsNotificationTypesEnum[] notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicName")
    public String topicName;
    public Notifications withTopicName(String topicName) {
        this.topicName = topicName;
        return this;
    }
}