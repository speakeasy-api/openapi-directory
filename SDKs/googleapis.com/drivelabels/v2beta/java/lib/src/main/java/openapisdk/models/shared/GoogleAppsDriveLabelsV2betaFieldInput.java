package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldInput
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
public class GoogleAppsDriveLabelsV2betaFieldInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedCapabilities")
    public GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities appliedCapabilities;
    public GoogleAppsDriveLabelsV2betaFieldInput withAppliedCapabilities(GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities appliedCapabilities) {
        this.appliedCapabilities = appliedCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public GoogleAppsDriveLabelsV2betaUserInfo creator;
    public GoogleAppsDriveLabelsV2betaFieldInput withCreator(GoogleAppsDriveLabelsV2betaUserInfo creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateOptions")
    public GoogleAppsDriveLabelsV2betaFieldDateOptionsInput dateOptions;
    public GoogleAppsDriveLabelsV2betaFieldInput withDateOptions(GoogleAppsDriveLabelsV2betaFieldDateOptionsInput dateOptions) {
        this.dateOptions = dateOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabler")
    public GoogleAppsDriveLabelsV2betaUserInfo disabler;
    public GoogleAppsDriveLabelsV2betaFieldInput withDisabler(GoogleAppsDriveLabelsV2betaUserInfo disabler) {
        this.disabler = disabler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayHints")
    public GoogleAppsDriveLabelsV2betaFieldDisplayHints displayHints;
    public GoogleAppsDriveLabelsV2betaFieldInput withDisplayHints(GoogleAppsDriveLabelsV2betaFieldDisplayHints displayHints) {
        this.displayHints = displayHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycle")
    public GoogleAppsDriveLabelsV2betaLifecycleInput lifecycle;
    public GoogleAppsDriveLabelsV2betaFieldInput withLifecycle(GoogleAppsDriveLabelsV2betaLifecycleInput lifecycle) {
        this.lifecycle = lifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GoogleAppsDriveLabelsV2betaFieldProperties properties;
    public GoogleAppsDriveLabelsV2betaFieldInput withProperties(GoogleAppsDriveLabelsV2betaFieldProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public GoogleAppsDriveLabelsV2betaUserInfo publisher;
    public GoogleAppsDriveLabelsV2betaFieldInput withPublisher(GoogleAppsDriveLabelsV2betaUserInfo publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaCapabilities")
    public GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities schemaCapabilities;
    public GoogleAppsDriveLabelsV2betaFieldInput withSchemaCapabilities(GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities schemaCapabilities) {
        this.schemaCapabilities = schemaCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionOptions")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput selectionOptions;
    public GoogleAppsDriveLabelsV2betaFieldInput withSelectionOptions(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput selectionOptions) {
        this.selectionOptions = selectionOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updater")
    public GoogleAppsDriveLabelsV2betaUserInfo updater;
    public GoogleAppsDriveLabelsV2betaFieldInput withUpdater(GoogleAppsDriveLabelsV2betaUserInfo updater) {
        this.updater = updater;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userOptions")
    public GoogleAppsDriveLabelsV2betaFieldUserOptions userOptions;
    public GoogleAppsDriveLabelsV2betaFieldInput withUserOptions(GoogleAppsDriveLabelsV2betaFieldUserOptions userOptions) {
        this.userOptions = userOptions;
        return this;
    }
}