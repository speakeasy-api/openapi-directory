package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1Conversation
 * The conversation resource.
**/
public class GoogleCloudContactcenterinsightsV1Conversation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentId")
    public String agentId;
    public GoogleCloudContactcenterinsightsV1Conversation withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callMetadata")
    public GoogleCloudContactcenterinsightsV1ConversationCallMetadata callMetadata;
    public GoogleCloudContactcenterinsightsV1Conversation withCallMetadata(GoogleCloudContactcenterinsightsV1ConversationCallMetadata callMetadata) {
        this.callMetadata = callMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudContactcenterinsightsV1Conversation withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSource")
    public GoogleCloudContactcenterinsightsV1ConversationDataSource dataSource;
    public GoogleCloudContactcenterinsightsV1Conversation withDataSource(GoogleCloudContactcenterinsightsV1ConversationDataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogflowIntents")
    public java.util.Map<String, GoogleCloudContactcenterinsightsV1DialogflowIntent> dialogflowIntents;
    public GoogleCloudContactcenterinsightsV1Conversation withDialogflowIntents(java.util.Map<String, GoogleCloudContactcenterinsightsV1DialogflowIntent> dialogflowIntents) {
        this.dialogflowIntents = dialogflowIntents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public GoogleCloudContactcenterinsightsV1Conversation withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GoogleCloudContactcenterinsightsV1Conversation withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudContactcenterinsightsV1Conversation withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudContactcenterinsightsV1Conversation withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestAnalysis")
    public GoogleCloudContactcenterinsightsV1Analysis latestAnalysis;
    public GoogleCloudContactcenterinsightsV1Conversation withLatestAnalysis(GoogleCloudContactcenterinsightsV1Analysis latestAnalysis) {
        this.latestAnalysis = latestAnalysis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public GoogleCloudContactcenterinsightsV1ConversationMediumEnum medium;
    public GoogleCloudContactcenterinsightsV1Conversation withMedium(GoogleCloudContactcenterinsightsV1ConversationMediumEnum medium) {
        this.medium = medium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudContactcenterinsightsV1Conversation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscatedUserId")
    public String obfuscatedUserId;
    public GoogleCloudContactcenterinsightsV1Conversation withObfuscatedUserId(String obfuscatedUserId) {
        this.obfuscatedUserId = obfuscatedUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeAnnotations")
    public GoogleCloudContactcenterinsightsV1RuntimeAnnotation[] runtimeAnnotations;
    public GoogleCloudContactcenterinsightsV1Conversation withRuntimeAnnotations(GoogleCloudContactcenterinsightsV1RuntimeAnnotation[] runtimeAnnotations) {
        this.runtimeAnnotations = runtimeAnnotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GoogleCloudContactcenterinsightsV1Conversation withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcript")
    public GoogleCloudContactcenterinsightsV1ConversationTranscript transcript;
    public GoogleCloudContactcenterinsightsV1Conversation withTranscript(GoogleCloudContactcenterinsightsV1ConversationTranscript transcript) {
        this.transcript = transcript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public GoogleCloudContactcenterinsightsV1Conversation withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("turnCount")
    public Integer turnCount;
    public GoogleCloudContactcenterinsightsV1Conversation withTurnCount(Integer turnCount) {
        this.turnCount = turnCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudContactcenterinsightsV1Conversation withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}