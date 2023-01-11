package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationChannel
 * A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
**/
public class NotificationChannel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationRecord")
    public MutationRecord creationRecord;
    public NotificationChannel withCreationRecord(MutationRecord creationRecord) {
        this.creationRecord = creationRecord;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NotificationChannel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public NotificationChannel withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public NotificationChannel withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public NotificationChannel withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mutationRecords")
    public MutationRecord[] mutationRecords;
    public NotificationChannel withMutationRecords(MutationRecord[] mutationRecords) {
        this.mutationRecords = mutationRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NotificationChannel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public NotificationChannel withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public NotificationChannel withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationStatus")
    public NotificationChannelVerificationStatusEnum verificationStatus;
    public NotificationChannel withVerificationStatus(NotificationChannelVerificationStatusEnum verificationStatus) {
        this.verificationStatus = verificationStatus;
        return this;
    }
}