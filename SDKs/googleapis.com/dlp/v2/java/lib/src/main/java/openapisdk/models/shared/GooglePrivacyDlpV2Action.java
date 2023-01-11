package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Action
 * A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more.
**/
public class GooglePrivacyDlpV2Action {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deidentify")
    public GooglePrivacyDlpV2Deidentify deidentify;
    public GooglePrivacyDlpV2Action withDeidentify(GooglePrivacyDlpV2Deidentify deidentify) {
        this.deidentify = deidentify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobNotificationEmails")
    public java.util.Map<String, Object> jobNotificationEmails;
    public GooglePrivacyDlpV2Action withJobNotificationEmails(java.util.Map<String, Object> jobNotificationEmails) {
        this.jobNotificationEmails = jobNotificationEmails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubSub")
    public GooglePrivacyDlpV2PublishToPubSub pubSub;
    public GooglePrivacyDlpV2Action withPubSub(GooglePrivacyDlpV2PublishToPubSub pubSub) {
        this.pubSub = pubSub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishFindingsToCloudDataCatalog")
    public java.util.Map<String, Object> publishFindingsToCloudDataCatalog;
    public GooglePrivacyDlpV2Action withPublishFindingsToCloudDataCatalog(java.util.Map<String, Object> publishFindingsToCloudDataCatalog) {
        this.publishFindingsToCloudDataCatalog = publishFindingsToCloudDataCatalog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishSummaryToCscc")
    public java.util.Map<String, Object> publishSummaryToCscc;
    public GooglePrivacyDlpV2Action withPublishSummaryToCscc(java.util.Map<String, Object> publishSummaryToCscc) {
        this.publishSummaryToCscc = publishSummaryToCscc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishToStackdriver")
    public java.util.Map<String, Object> publishToStackdriver;
    public GooglePrivacyDlpV2Action withPublishToStackdriver(java.util.Map<String, Object> publishToStackdriver) {
        this.publishToStackdriver = publishToStackdriver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saveFindings")
    public GooglePrivacyDlpV2SaveFindings saveFindings;
    public GooglePrivacyDlpV2Action withSaveFindings(GooglePrivacyDlpV2SaveFindings saveFindings) {
        this.saveFindings = saveFindings;
        return this;
    }
}