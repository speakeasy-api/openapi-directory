package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Finding
 * Represents a piece of potentially sensitive content.
**/
public class GooglePrivacyDlpV2Finding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GooglePrivacyDlpV2Finding withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingId")
    public String findingId;
    public GooglePrivacyDlpV2Finding withFindingId(String findingId) {
        this.findingId = findingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoType")
    public GooglePrivacyDlpV2InfoType infoType;
    public GooglePrivacyDlpV2Finding withInfoType(GooglePrivacyDlpV2InfoType infoType) {
        this.infoType = infoType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobCreateTime")
    public String jobCreateTime;
    public GooglePrivacyDlpV2Finding withJobCreateTime(String jobCreateTime) {
        this.jobCreateTime = jobCreateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobName")
    public String jobName;
    public GooglePrivacyDlpV2Finding withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GooglePrivacyDlpV2Finding withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likelihood")
    public GooglePrivacyDlpV2FindingLikelihoodEnum likelihood;
    public GooglePrivacyDlpV2Finding withLikelihood(GooglePrivacyDlpV2FindingLikelihoodEnum likelihood) {
        this.likelihood = likelihood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public GooglePrivacyDlpV2Location location;
    public GooglePrivacyDlpV2Finding withLocation(GooglePrivacyDlpV2Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GooglePrivacyDlpV2Finding withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quote")
    public String quote;
    public GooglePrivacyDlpV2Finding withQuote(String quote) {
        this.quote = quote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quoteInfo")
    public GooglePrivacyDlpV2QuoteInfo quoteInfo;
    public GooglePrivacyDlpV2Finding withQuoteInfo(GooglePrivacyDlpV2QuoteInfo quoteInfo) {
        this.quoteInfo = quoteInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public GooglePrivacyDlpV2Finding withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerName")
    public String triggerName;
    public GooglePrivacyDlpV2Finding withTriggerName(String triggerName) {
        this.triggerName = triggerName;
        return this;
    }
}