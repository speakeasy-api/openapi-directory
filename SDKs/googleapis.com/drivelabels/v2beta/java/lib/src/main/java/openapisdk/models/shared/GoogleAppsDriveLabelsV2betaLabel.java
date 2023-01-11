package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaLabel
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
public class GoogleAppsDriveLabelsV2betaLabel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedCapabilities")
    public GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities appliedCapabilities;
    public GoogleAppsDriveLabelsV2betaLabel withAppliedCapabilities(GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities appliedCapabilities) {
        this.appliedCapabilities = appliedCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedLabelPolicy")
    public GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy appliedLabelPolicy;
    public GoogleAppsDriveLabelsV2betaLabel withAppliedLabelPolicy(GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy appliedLabelPolicy) {
        this.appliedLabelPolicy = appliedLabelPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAppsDriveLabelsV2betaLabel withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public GoogleAppsDriveLabelsV2betaUserInfo creator;
    public GoogleAppsDriveLabelsV2betaLabel withCreator(GoogleAppsDriveLabelsV2betaUserInfo creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableTime")
    public String disableTime;
    public GoogleAppsDriveLabelsV2betaLabel withDisableTime(String disableTime) {
        this.disableTime = disableTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabler")
    public GoogleAppsDriveLabelsV2betaUserInfo disabler;
    public GoogleAppsDriveLabelsV2betaLabel withDisabler(GoogleAppsDriveLabelsV2betaUserInfo disabler) {
        this.disabler = disabler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayHints")
    public GoogleAppsDriveLabelsV2betaLabelDisplayHints displayHints;
    public GoogleAppsDriveLabelsV2betaLabel withDisplayHints(GoogleAppsDriveLabelsV2betaLabelDisplayHints displayHints) {
        this.displayHints = displayHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public GoogleAppsDriveLabelsV2betaField[] fields;
    public GoogleAppsDriveLabelsV2betaLabel withFields(GoogleAppsDriveLabelsV2betaField[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2betaLabel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelType")
    public GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum labelType;
    public GoogleAppsDriveLabelsV2betaLabel withLabelType(GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum labelType) {
        this.labelType = labelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learnMoreUri")
    public String learnMoreUri;
    public GoogleAppsDriveLabelsV2betaLabel withLearnMoreUri(String learnMoreUri) {
        this.learnMoreUri = learnMoreUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycle")
    public GoogleAppsDriveLabelsV2betaLifecycle lifecycle;
    public GoogleAppsDriveLabelsV2betaLabel withLifecycle(GoogleAppsDriveLabelsV2betaLifecycle lifecycle) {
        this.lifecycle = lifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockStatus")
    public GoogleAppsDriveLabelsV2betaLockStatus lockStatus;
    public GoogleAppsDriveLabelsV2betaLabel withLockStatus(GoogleAppsDriveLabelsV2betaLockStatus lockStatus) {
        this.lockStatus = lockStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAppsDriveLabelsV2betaLabel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GoogleAppsDriveLabelsV2betaLabelProperties properties;
    public GoogleAppsDriveLabelsV2betaLabel withProperties(GoogleAppsDriveLabelsV2betaLabelProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishTime")
    public String publishTime;
    public GoogleAppsDriveLabelsV2betaLabel withPublishTime(String publishTime) {
        this.publishTime = publishTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public GoogleAppsDriveLabelsV2betaUserInfo publisher;
    public GoogleAppsDriveLabelsV2betaLabel withPublisher(GoogleAppsDriveLabelsV2betaUserInfo publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionCreateTime")
    public String revisionCreateTime;
    public GoogleAppsDriveLabelsV2betaLabel withRevisionCreateTime(String revisionCreateTime) {
        this.revisionCreateTime = revisionCreateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionCreator")
    public GoogleAppsDriveLabelsV2betaUserInfo revisionCreator;
    public GoogleAppsDriveLabelsV2betaLabel withRevisionCreator(GoogleAppsDriveLabelsV2betaUserInfo revisionCreator) {
        this.revisionCreator = revisionCreator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public GoogleAppsDriveLabelsV2betaLabel withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaCapabilities")
    public GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities schemaCapabilities;
    public GoogleAppsDriveLabelsV2betaLabel withSchemaCapabilities(GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities schemaCapabilities) {
        this.schemaCapabilities = schemaCapabilities;
        return this;
    }
}