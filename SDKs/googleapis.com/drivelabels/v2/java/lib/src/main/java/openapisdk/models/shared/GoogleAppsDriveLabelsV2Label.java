package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2Label
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
public class GoogleAppsDriveLabelsV2Label {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedCapabilities")
    public GoogleAppsDriveLabelsV2LabelAppliedCapabilities appliedCapabilities;
    public GoogleAppsDriveLabelsV2Label withAppliedCapabilities(GoogleAppsDriveLabelsV2LabelAppliedCapabilities appliedCapabilities) {
        this.appliedCapabilities = appliedCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appliedLabelPolicy")
    public GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy appliedLabelPolicy;
    public GoogleAppsDriveLabelsV2Label withAppliedLabelPolicy(GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy appliedLabelPolicy) {
        this.appliedLabelPolicy = appliedLabelPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleAppsDriveLabelsV2Label withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public GoogleAppsDriveLabelsV2UserInfo creator;
    public GoogleAppsDriveLabelsV2Label withCreator(GoogleAppsDriveLabelsV2UserInfo creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableTime")
    public String disableTime;
    public GoogleAppsDriveLabelsV2Label withDisableTime(String disableTime) {
        this.disableTime = disableTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabler")
    public GoogleAppsDriveLabelsV2UserInfo disabler;
    public GoogleAppsDriveLabelsV2Label withDisabler(GoogleAppsDriveLabelsV2UserInfo disabler) {
        this.disabler = disabler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayHints")
    public GoogleAppsDriveLabelsV2LabelDisplayHints displayHints;
    public GoogleAppsDriveLabelsV2Label withDisplayHints(GoogleAppsDriveLabelsV2LabelDisplayHints displayHints) {
        this.displayHints = displayHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public GoogleAppsDriveLabelsV2Field[] fields;
    public GoogleAppsDriveLabelsV2Label withFields(GoogleAppsDriveLabelsV2Field[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2Label withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelType")
    public GoogleAppsDriveLabelsV2LabelLabelTypeEnum labelType;
    public GoogleAppsDriveLabelsV2Label withLabelType(GoogleAppsDriveLabelsV2LabelLabelTypeEnum labelType) {
        this.labelType = labelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("learnMoreUri")
    public String learnMoreUri;
    public GoogleAppsDriveLabelsV2Label withLearnMoreUri(String learnMoreUri) {
        this.learnMoreUri = learnMoreUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecycle")
    public GoogleAppsDriveLabelsV2Lifecycle lifecycle;
    public GoogleAppsDriveLabelsV2Label withLifecycle(GoogleAppsDriveLabelsV2Lifecycle lifecycle) {
        this.lifecycle = lifecycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lockStatus")
    public GoogleAppsDriveLabelsV2LockStatus lockStatus;
    public GoogleAppsDriveLabelsV2Label withLockStatus(GoogleAppsDriveLabelsV2LockStatus lockStatus) {
        this.lockStatus = lockStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAppsDriveLabelsV2Label withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public GoogleAppsDriveLabelsV2LabelProperties properties;
    public GoogleAppsDriveLabelsV2Label withProperties(GoogleAppsDriveLabelsV2LabelProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishTime")
    public String publishTime;
    public GoogleAppsDriveLabelsV2Label withPublishTime(String publishTime) {
        this.publishTime = publishTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public GoogleAppsDriveLabelsV2UserInfo publisher;
    public GoogleAppsDriveLabelsV2Label withPublisher(GoogleAppsDriveLabelsV2UserInfo publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionCreateTime")
    public String revisionCreateTime;
    public GoogleAppsDriveLabelsV2Label withRevisionCreateTime(String revisionCreateTime) {
        this.revisionCreateTime = revisionCreateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionCreator")
    public GoogleAppsDriveLabelsV2UserInfo revisionCreator;
    public GoogleAppsDriveLabelsV2Label withRevisionCreator(GoogleAppsDriveLabelsV2UserInfo revisionCreator) {
        this.revisionCreator = revisionCreator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public GoogleAppsDriveLabelsV2Label withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaCapabilities")
    public GoogleAppsDriveLabelsV2LabelSchemaCapabilities schemaCapabilities;
    public GoogleAppsDriveLabelsV2Label withSchemaCapabilities(GoogleAppsDriveLabelsV2LabelSchemaCapabilities schemaCapabilities) {
        this.schemaCapabilities = schemaCapabilities;
        return this;
    }
}