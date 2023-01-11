package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice
 * Selection field choice.
**/
public class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedCapabilities")
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities appliedCapabilities;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withAppliedCapabilities(GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities appliedCapabilities) {
        this.appliedCapabilities = appliedCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public GoogleAppsDriveLabelsV2UserInfo creator;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withCreator(GoogleAppsDriveLabelsV2UserInfo creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableTime")
    public String disableTime;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withDisableTime(String disableTime) {
        this.disableTime = disableTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabler")
    public GoogleAppsDriveLabelsV2UserInfo disabler;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withDisabler(GoogleAppsDriveLabelsV2UserInfo disabler) {
        this.disabler = disabler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayHints")
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints displayHints;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withDisplayHints(GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints displayHints) {
        this.displayHints = displayHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycle")
    public GoogleAppsDriveLabelsV2Lifecycle lifecycle;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withLifecycle(GoogleAppsDriveLabelsV2Lifecycle lifecycle) {
        this.lifecycle = lifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockStatus")
    public GoogleAppsDriveLabelsV2LockStatus lockStatus;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withLockStatus(GoogleAppsDriveLabelsV2LockStatus lockStatus) {
        this.lockStatus = lockStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties properties;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withProperties(GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishTime")
    public String publishTime;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withPublishTime(String publishTime) {
        this.publishTime = publishTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public GoogleAppsDriveLabelsV2UserInfo publisher;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withPublisher(GoogleAppsDriveLabelsV2UserInfo publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaCapabilities")
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities schemaCapabilities;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withSchemaCapabilities(GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities schemaCapabilities) {
        this.schemaCapabilities = schemaCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updater")
    public GoogleAppsDriveLabelsV2UserInfo updater;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice withUpdater(GoogleAppsDriveLabelsV2UserInfo updater) {
        this.updater = updater;
        return this;
    }
}