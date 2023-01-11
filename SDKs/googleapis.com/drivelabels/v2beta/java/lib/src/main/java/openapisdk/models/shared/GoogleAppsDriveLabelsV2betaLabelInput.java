package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLabelInput
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
public class GoogleAppsDriveLabelsV2betaLabelInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedCapabilities")
    public GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities appliedCapabilities;
    public GoogleAppsDriveLabelsV2betaLabelInput withAppliedCapabilities(GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities appliedCapabilities) {
        this.appliedCapabilities = appliedCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedLabelPolicy")
    public GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy appliedLabelPolicy;
    public GoogleAppsDriveLabelsV2betaLabelInput withAppliedLabelPolicy(GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy appliedLabelPolicy) {
        this.appliedLabelPolicy = appliedLabelPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public GoogleAppsDriveLabelsV2betaUserInfo creator;
    public GoogleAppsDriveLabelsV2betaLabelInput withCreator(GoogleAppsDriveLabelsV2betaUserInfo creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabler")
    public GoogleAppsDriveLabelsV2betaUserInfo disabler;
    public GoogleAppsDriveLabelsV2betaLabelInput withDisabler(GoogleAppsDriveLabelsV2betaUserInfo disabler) {
        this.disabler = disabler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayHints")
    public GoogleAppsDriveLabelsV2betaLabelDisplayHints displayHints;
    public GoogleAppsDriveLabelsV2betaLabelInput withDisplayHints(GoogleAppsDriveLabelsV2betaLabelDisplayHints displayHints) {
        this.displayHints = displayHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public GoogleAppsDriveLabelsV2betaFieldInput[] fields;
    public GoogleAppsDriveLabelsV2betaLabelInput withFields(GoogleAppsDriveLabelsV2betaFieldInput[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelType")
    public GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum labelType;
    public GoogleAppsDriveLabelsV2betaLabelInput withLabelType(GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum labelType) {
        this.labelType = labelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learnMoreUri")
    public String learnMoreUri;
    public GoogleAppsDriveLabelsV2betaLabelInput withLearnMoreUri(String learnMoreUri) {
        this.learnMoreUri = learnMoreUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycle")
    public GoogleAppsDriveLabelsV2betaLifecycleInput lifecycle;
    public GoogleAppsDriveLabelsV2betaLabelInput withLifecycle(GoogleAppsDriveLabelsV2betaLifecycleInput lifecycle) {
        this.lifecycle = lifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GoogleAppsDriveLabelsV2betaLabelProperties properties;
    public GoogleAppsDriveLabelsV2betaLabelInput withProperties(GoogleAppsDriveLabelsV2betaLabelProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public GoogleAppsDriveLabelsV2betaUserInfo publisher;
    public GoogleAppsDriveLabelsV2betaLabelInput withPublisher(GoogleAppsDriveLabelsV2betaUserInfo publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionCreator")
    public GoogleAppsDriveLabelsV2betaUserInfo revisionCreator;
    public GoogleAppsDriveLabelsV2betaLabelInput withRevisionCreator(GoogleAppsDriveLabelsV2betaUserInfo revisionCreator) {
        this.revisionCreator = revisionCreator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaCapabilities")
    public GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities schemaCapabilities;
    public GoogleAppsDriveLabelsV2betaLabelInput withSchemaCapabilities(GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities schemaCapabilities) {
        this.schemaCapabilities = schemaCapabilities;
        return this;
    }
}