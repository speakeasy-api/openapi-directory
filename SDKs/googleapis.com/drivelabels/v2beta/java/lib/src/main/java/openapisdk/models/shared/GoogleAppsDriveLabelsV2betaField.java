package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaField
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
public class GoogleAppsDriveLabelsV2betaField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedCapabilities")
    public GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities appliedCapabilities;
    public GoogleAppsDriveLabelsV2betaField withAppliedCapabilities(GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities appliedCapabilities) {
        this.appliedCapabilities = appliedCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAppsDriveLabelsV2betaField withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public GoogleAppsDriveLabelsV2betaUserInfo creator;
    public GoogleAppsDriveLabelsV2betaField withCreator(GoogleAppsDriveLabelsV2betaUserInfo creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateOptions")
    public GoogleAppsDriveLabelsV2betaFieldDateOptions dateOptions;
    public GoogleAppsDriveLabelsV2betaField withDateOptions(GoogleAppsDriveLabelsV2betaFieldDateOptions dateOptions) {
        this.dateOptions = dateOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableTime")
    public String disableTime;
    public GoogleAppsDriveLabelsV2betaField withDisableTime(String disableTime) {
        this.disableTime = disableTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabler")
    public GoogleAppsDriveLabelsV2betaUserInfo disabler;
    public GoogleAppsDriveLabelsV2betaField withDisabler(GoogleAppsDriveLabelsV2betaUserInfo disabler) {
        this.disabler = disabler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayHints")
    public GoogleAppsDriveLabelsV2betaFieldDisplayHints displayHints;
    public GoogleAppsDriveLabelsV2betaField withDisplayHints(GoogleAppsDriveLabelsV2betaFieldDisplayHints displayHints) {
        this.displayHints = displayHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2betaField withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integerOptions")
    public GoogleAppsDriveLabelsV2betaFieldIntegerOptions integerOptions;
    public GoogleAppsDriveLabelsV2betaField withIntegerOptions(GoogleAppsDriveLabelsV2betaFieldIntegerOptions integerOptions) {
        this.integerOptions = integerOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycle")
    public GoogleAppsDriveLabelsV2betaLifecycle lifecycle;
    public GoogleAppsDriveLabelsV2betaField withLifecycle(GoogleAppsDriveLabelsV2betaLifecycle lifecycle) {
        this.lifecycle = lifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockStatus")
    public GoogleAppsDriveLabelsV2betaLockStatus lockStatus;
    public GoogleAppsDriveLabelsV2betaField withLockStatus(GoogleAppsDriveLabelsV2betaLockStatus lockStatus) {
        this.lockStatus = lockStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GoogleAppsDriveLabelsV2betaFieldProperties properties;
    public GoogleAppsDriveLabelsV2betaField withProperties(GoogleAppsDriveLabelsV2betaFieldProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public GoogleAppsDriveLabelsV2betaUserInfo publisher;
    public GoogleAppsDriveLabelsV2betaField withPublisher(GoogleAppsDriveLabelsV2betaUserInfo publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryKey")
    public String queryKey;
    public GoogleAppsDriveLabelsV2betaField withQueryKey(String queryKey) {
        this.queryKey = queryKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaCapabilities")
    public GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities schemaCapabilities;
    public GoogleAppsDriveLabelsV2betaField withSchemaCapabilities(GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities schemaCapabilities) {
        this.schemaCapabilities = schemaCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionOptions")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptions selectionOptions;
    public GoogleAppsDriveLabelsV2betaField withSelectionOptions(GoogleAppsDriveLabelsV2betaFieldSelectionOptions selectionOptions) {
        this.selectionOptions = selectionOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textOptions")
    public GoogleAppsDriveLabelsV2betaFieldTextOptions textOptions;
    public GoogleAppsDriveLabelsV2betaField withTextOptions(GoogleAppsDriveLabelsV2betaFieldTextOptions textOptions) {
        this.textOptions = textOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleAppsDriveLabelsV2betaField withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updater")
    public GoogleAppsDriveLabelsV2betaUserInfo updater;
    public GoogleAppsDriveLabelsV2betaField withUpdater(GoogleAppsDriveLabelsV2betaUserInfo updater) {
        this.updater = updater;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userOptions")
    public GoogleAppsDriveLabelsV2betaFieldUserOptions userOptions;
    public GoogleAppsDriveLabelsV2betaField withUserOptions(GoogleAppsDriveLabelsV2betaFieldUserOptions userOptions) {
        this.userOptions = userOptions;
        return this;
    }
}