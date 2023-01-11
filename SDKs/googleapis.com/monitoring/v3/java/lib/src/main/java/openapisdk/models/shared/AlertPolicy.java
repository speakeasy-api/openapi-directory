package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlertPolicy
 * A description of the conditions under which some aspect of your system is considered to be "unhealthy" and the ways to notify people or services about this state. For an overview of alert policies, see Introduction to Alerting (https://cloud.google.com/monitoring/alerts/).
**/
public class AlertPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alertStrategy")
    public AlertStrategy alertStrategy;
    public AlertPolicy withAlertStrategy(AlertStrategy alertStrategy) {
        this.alertStrategy = alertStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("combiner")
    public AlertPolicyCombinerEnum combiner;
    public AlertPolicy withCombiner(AlertPolicyCombinerEnum combiner) {
        this.combiner = combiner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public Condition[] conditions;
    public AlertPolicy withConditions(Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationRecord")
    public MutationRecord creationRecord;
    public AlertPolicy withCreationRecord(MutationRecord creationRecord) {
        this.creationRecord = creationRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public AlertPolicy withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation")
    public Documentation documentation;
    public AlertPolicy withDocumentation(Documentation documentation) {
        this.documentation = documentation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public AlertPolicy withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mutationRecord")
    public MutationRecord mutationRecord;
    public AlertPolicy withMutationRecord(MutationRecord mutationRecord) {
        this.mutationRecord = mutationRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AlertPolicy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationChannels")
    public String[] notificationChannels;
    public AlertPolicy withNotificationChannels(String[] notificationChannels) {
        this.notificationChannels = notificationChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public AlertPolicy withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validity")
    public Status validity;
    public AlertPolicy withValidity(Status validity) {
        this.validity = validity;
        return this;
    }
}