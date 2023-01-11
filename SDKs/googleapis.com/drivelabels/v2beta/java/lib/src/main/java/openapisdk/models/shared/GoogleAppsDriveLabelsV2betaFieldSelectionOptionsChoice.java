package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice
 * Selection field choice.
**/
public class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedCapabilities")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities appliedCapabilities;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withAppliedCapabilities(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities appliedCapabilities) {
        this.appliedCapabilities = appliedCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public GoogleAppsDriveLabelsV2betaUserInfo creator;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withCreator(GoogleAppsDriveLabelsV2betaUserInfo creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableTime")
    public String disableTime;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withDisableTime(String disableTime) {
        this.disableTime = disableTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabler")
    public GoogleAppsDriveLabelsV2betaUserInfo disabler;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withDisabler(GoogleAppsDriveLabelsV2betaUserInfo disabler) {
        this.disabler = disabler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayHints")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints displayHints;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withDisplayHints(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints displayHints) {
        this.displayHints = displayHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycle")
    public GoogleAppsDriveLabelsV2betaLifecycle lifecycle;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withLifecycle(GoogleAppsDriveLabelsV2betaLifecycle lifecycle) {
        this.lifecycle = lifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockStatus")
    public GoogleAppsDriveLabelsV2betaLockStatus lockStatus;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withLockStatus(GoogleAppsDriveLabelsV2betaLockStatus lockStatus) {
        this.lockStatus = lockStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties properties;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withProperties(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishTime")
    public String publishTime;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withPublishTime(String publishTime) {
        this.publishTime = publishTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public GoogleAppsDriveLabelsV2betaUserInfo publisher;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withPublisher(GoogleAppsDriveLabelsV2betaUserInfo publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaCapabilities")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities schemaCapabilities;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withSchemaCapabilities(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities schemaCapabilities) {
        this.schemaCapabilities = schemaCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updater")
    public GoogleAppsDriveLabelsV2betaUserInfo updater;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice withUpdater(GoogleAppsDriveLabelsV2betaUserInfo updater) {
        this.updater = updater;
        return this;
    }
}