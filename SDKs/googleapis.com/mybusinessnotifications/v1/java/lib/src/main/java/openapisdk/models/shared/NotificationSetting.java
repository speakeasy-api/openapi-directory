package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationSetting
 * A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account.
**/
public class NotificationSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NotificationSetting withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationTypes")
    public NotificationSettingNotificationTypesEnum[] notificationTypes;
    public NotificationSetting withNotificationTypes(NotificationSettingNotificationTypesEnum[] notificationTypes) {
        this.notificationTypes = notificationTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsubTopic")
    public String pubsubTopic;
    public NotificationSetting withPubsubTopic(String pubsubTopic) {
        this.pubsubTopic = pubsubTopic;
        return this;
    }
}