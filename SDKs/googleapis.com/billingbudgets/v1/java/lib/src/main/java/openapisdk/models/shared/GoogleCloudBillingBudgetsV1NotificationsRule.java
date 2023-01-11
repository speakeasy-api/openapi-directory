package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBillingBudgetsV1NotificationsRule
 * NotificationsRule defines notifications that are sent based on budget spend and thresholds.
**/
public class GoogleCloudBillingBudgetsV1NotificationsRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableDefaultIamRecipients")
    public Boolean disableDefaultIamRecipients;
    public GoogleCloudBillingBudgetsV1NotificationsRule withDisableDefaultIamRecipients(Boolean disableDefaultIamRecipients) {
        this.disableDefaultIamRecipients = disableDefaultIamRecipients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitoringNotificationChannels")
    public String[] monitoringNotificationChannels;
    public GoogleCloudBillingBudgetsV1NotificationsRule withMonitoringNotificationChannels(String[] monitoringNotificationChannels) {
        this.monitoringNotificationChannels = monitoringNotificationChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsubTopic")
    public String pubsubTopic;
    public GoogleCloudBillingBudgetsV1NotificationsRule withPubsubTopic(String pubsubTopic) {
        this.pubsubTopic = pubsubTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public String schemaVersion;
    public GoogleCloudBillingBudgetsV1NotificationsRule withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
}