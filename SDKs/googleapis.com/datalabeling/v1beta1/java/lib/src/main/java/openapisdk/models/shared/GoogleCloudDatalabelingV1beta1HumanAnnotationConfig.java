package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1HumanAnnotationConfig
 * Configuration for how human labeling task should be done.
**/
public class GoogleCloudDatalabelingV1beta1HumanAnnotationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotatedDatasetDescription")
    public String annotatedDatasetDescription;
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig withAnnotatedDatasetDescription(String annotatedDatasetDescription) {
        this.annotatedDatasetDescription = annotatedDatasetDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotatedDatasetDisplayName")
    public String annotatedDatasetDisplayName;
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig withAnnotatedDatasetDisplayName(String annotatedDatasetDisplayName) {
        this.annotatedDatasetDisplayName = annotatedDatasetDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributorEmails")
    public String[] contributorEmails;
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig withContributorEmails(String[] contributorEmails) {
        this.contributorEmails = contributorEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instruction")
    public String instruction;
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig withInstruction(String instruction) {
        this.instruction = instruction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelGroup")
    public String labelGroup;
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig withLabelGroup(String labelGroup) {
        this.labelGroup = labelGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("questionDuration")
    public String questionDuration;
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig withQuestionDuration(String questionDuration) {
        this.questionDuration = questionDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicaCount")
    public Integer replicaCount;
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig withReplicaCount(Integer replicaCount) {
        this.replicaCount = replicaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEmailAddress")
    public String userEmailAddress;
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig withUserEmailAddress(String userEmailAddress) {
        this.userEmailAddress = userEmailAddress;
        return this;
    }
}