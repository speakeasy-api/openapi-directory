package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2Field
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
public class GoogleAppsDriveLabelsV2Field {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedCapabilities")
    public GoogleAppsDriveLabelsV2FieldAppliedCapabilities appliedCapabilities;
    public GoogleAppsDriveLabelsV2Field withAppliedCapabilities(GoogleAppsDriveLabelsV2FieldAppliedCapabilities appliedCapabilities) {
        this.appliedCapabilities = appliedCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAppsDriveLabelsV2Field withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public GoogleAppsDriveLabelsV2UserInfo creator;
    public GoogleAppsDriveLabelsV2Field withCreator(GoogleAppsDriveLabelsV2UserInfo creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateOptions")
    public GoogleAppsDriveLabelsV2FieldDateOptions dateOptions;
    public GoogleAppsDriveLabelsV2Field withDateOptions(GoogleAppsDriveLabelsV2FieldDateOptions dateOptions) {
        this.dateOptions = dateOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableTime")
    public String disableTime;
    public GoogleAppsDriveLabelsV2Field withDisableTime(String disableTime) {
        this.disableTime = disableTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabler")
    public GoogleAppsDriveLabelsV2UserInfo disabler;
    public GoogleAppsDriveLabelsV2Field withDisabler(GoogleAppsDriveLabelsV2UserInfo disabler) {
        this.disabler = disabler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayHints")
    public GoogleAppsDriveLabelsV2FieldDisplayHints displayHints;
    public GoogleAppsDriveLabelsV2Field withDisplayHints(GoogleAppsDriveLabelsV2FieldDisplayHints displayHints) {
        this.displayHints = displayHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2Field withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integerOptions")
    public GoogleAppsDriveLabelsV2FieldIntegerOptions integerOptions;
    public GoogleAppsDriveLabelsV2Field withIntegerOptions(GoogleAppsDriveLabelsV2FieldIntegerOptions integerOptions) {
        this.integerOptions = integerOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycle")
    public GoogleAppsDriveLabelsV2Lifecycle lifecycle;
    public GoogleAppsDriveLabelsV2Field withLifecycle(GoogleAppsDriveLabelsV2Lifecycle lifecycle) {
        this.lifecycle = lifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockStatus")
    public GoogleAppsDriveLabelsV2LockStatus lockStatus;
    public GoogleAppsDriveLabelsV2Field withLockStatus(GoogleAppsDriveLabelsV2LockStatus lockStatus) {
        this.lockStatus = lockStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GoogleAppsDriveLabelsV2FieldProperties properties;
    public GoogleAppsDriveLabelsV2Field withProperties(GoogleAppsDriveLabelsV2FieldProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public GoogleAppsDriveLabelsV2UserInfo publisher;
    public GoogleAppsDriveLabelsV2Field withPublisher(GoogleAppsDriveLabelsV2UserInfo publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryKey")
    public String queryKey;
    public GoogleAppsDriveLabelsV2Field withQueryKey(String queryKey) {
        this.queryKey = queryKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaCapabilities")
    public GoogleAppsDriveLabelsV2FieldSchemaCapabilities schemaCapabilities;
    public GoogleAppsDriveLabelsV2Field withSchemaCapabilities(GoogleAppsDriveLabelsV2FieldSchemaCapabilities schemaCapabilities) {
        this.schemaCapabilities = schemaCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionOptions")
    public GoogleAppsDriveLabelsV2FieldSelectionOptions selectionOptions;
    public GoogleAppsDriveLabelsV2Field withSelectionOptions(GoogleAppsDriveLabelsV2FieldSelectionOptions selectionOptions) {
        this.selectionOptions = selectionOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textOptions")
    public GoogleAppsDriveLabelsV2FieldTextOptions textOptions;
    public GoogleAppsDriveLabelsV2Field withTextOptions(GoogleAppsDriveLabelsV2FieldTextOptions textOptions) {
        this.textOptions = textOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleAppsDriveLabelsV2Field withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updater")
    public GoogleAppsDriveLabelsV2UserInfo updater;
    public GoogleAppsDriveLabelsV2Field withUpdater(GoogleAppsDriveLabelsV2UserInfo updater) {
        this.updater = updater;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userOptions")
    public GoogleAppsDriveLabelsV2FieldUserOptions userOptions;
    public GoogleAppsDriveLabelsV2Field withUserOptions(GoogleAppsDriveLabelsV2FieldUserOptions userOptions) {
        this.userOptions = userOptions;
        return this;
    }
}