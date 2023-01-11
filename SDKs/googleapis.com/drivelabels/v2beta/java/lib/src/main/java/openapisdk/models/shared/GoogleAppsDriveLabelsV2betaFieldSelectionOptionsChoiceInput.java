package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput
 * Selection field choice.
**/
public class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedCapabilities")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities appliedCapabilities;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput withAppliedCapabilities(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities appliedCapabilities) {
        this.appliedCapabilities = appliedCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public GoogleAppsDriveLabelsV2betaUserInfo creator;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput withCreator(GoogleAppsDriveLabelsV2betaUserInfo creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabler")
    public GoogleAppsDriveLabelsV2betaUserInfo disabler;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput withDisabler(GoogleAppsDriveLabelsV2betaUserInfo disabler) {
        this.disabler = disabler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayHints")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints displayHints;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput withDisplayHints(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints displayHints) {
        this.displayHints = displayHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycle")
    public GoogleAppsDriveLabelsV2betaLifecycleInput lifecycle;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput withLifecycle(GoogleAppsDriveLabelsV2betaLifecycleInput lifecycle) {
        this.lifecycle = lifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties properties;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput withProperties(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public GoogleAppsDriveLabelsV2betaUserInfo publisher;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput withPublisher(GoogleAppsDriveLabelsV2betaUserInfo publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaCapabilities")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities schemaCapabilities;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput withSchemaCapabilities(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities schemaCapabilities) {
        this.schemaCapabilities = schemaCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updater")
    public GoogleAppsDriveLabelsV2betaUserInfo updater;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput withUpdater(GoogleAppsDriveLabelsV2betaUserInfo updater) {
        this.updater = updater;
        return this;
    }
}