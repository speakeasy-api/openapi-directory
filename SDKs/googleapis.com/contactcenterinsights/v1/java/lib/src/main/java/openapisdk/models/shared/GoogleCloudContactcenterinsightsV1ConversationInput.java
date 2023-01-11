package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ConversationInput
 * The conversation resource.
**/
public class GoogleCloudContactcenterinsightsV1ConversationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentId")
    public String agentId;
    public GoogleCloudContactcenterinsightsV1ConversationInput withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callMetadata")
    public GoogleCloudContactcenterinsightsV1ConversationCallMetadata callMetadata;
    public GoogleCloudContactcenterinsightsV1ConversationInput withCallMetadata(GoogleCloudContactcenterinsightsV1ConversationCallMetadata callMetadata) {
        this.callMetadata = callMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSource")
    public GoogleCloudContactcenterinsightsV1ConversationDataSourceInput dataSource;
    public GoogleCloudContactcenterinsightsV1ConversationInput withDataSource(GoogleCloudContactcenterinsightsV1ConversationDataSourceInput dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GoogleCloudContactcenterinsightsV1ConversationInput withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudContactcenterinsightsV1ConversationInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudContactcenterinsightsV1ConversationInput withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestAnalysis")
    public GoogleCloudContactcenterinsightsV1AnalysisInput latestAnalysis;
    public GoogleCloudContactcenterinsightsV1ConversationInput withLatestAnalysis(GoogleCloudContactcenterinsightsV1AnalysisInput latestAnalysis) {
        this.latestAnalysis = latestAnalysis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public GoogleCloudContactcenterinsightsV1ConversationMediumEnum medium;
    public GoogleCloudContactcenterinsightsV1ConversationInput withMedium(GoogleCloudContactcenterinsightsV1ConversationMediumEnum medium) {
        this.medium = medium;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudContactcenterinsightsV1ConversationInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscatedUserId")
    public String obfuscatedUserId;
    public GoogleCloudContactcenterinsightsV1ConversationInput withObfuscatedUserId(String obfuscatedUserId) {
        this.obfuscatedUserId = obfuscatedUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GoogleCloudContactcenterinsightsV1ConversationInput withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transcript")
    public GoogleCloudContactcenterinsightsV1ConversationTranscript transcript;
    public GoogleCloudContactcenterinsightsV1ConversationInput withTranscript(GoogleCloudContactcenterinsightsV1ConversationTranscript transcript) {
        this.transcript = transcript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public String ttl;
    public GoogleCloudContactcenterinsightsV1ConversationInput withTtl(String ttl) {
        this.ttl = ttl;
        return this;
    }
}