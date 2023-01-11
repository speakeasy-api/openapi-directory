package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationChannelDescriptor
 * A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type.
**/
public class NotificationChannelDescriptor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NotificationChannelDescriptor withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public NotificationChannelDescriptor withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public LabelDescriptor[] labels;
    public NotificationChannelDescriptor withLabels(LabelDescriptor[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public NotificationChannelDescriptorLaunchStageEnum launchStage;
    public NotificationChannelDescriptor withLaunchStage(NotificationChannelDescriptorLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NotificationChannelDescriptor withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedTiers")
    public NotificationChannelDescriptorSupportedTiersEnum[] supportedTiers;
    public NotificationChannelDescriptor withSupportedTiers(NotificationChannelDescriptorSupportedTiersEnum[] supportedTiers) {
        this.supportedTiers = supportedTiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public NotificationChannelDescriptor withType(String type) {
        this.type = type;
        return this;
    }
}