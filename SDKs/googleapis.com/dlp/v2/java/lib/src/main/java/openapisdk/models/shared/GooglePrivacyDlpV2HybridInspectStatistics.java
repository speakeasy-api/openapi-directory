package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2HybridInspectStatistics
 * Statistics related to processing hybrid inspect requests.
**/
public class GooglePrivacyDlpV2HybridInspectStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abortedCount")
    public String abortedCount;
    public GooglePrivacyDlpV2HybridInspectStatistics withAbortedCount(String abortedCount) {
        this.abortedCount = abortedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingCount")
    public String pendingCount;
    public GooglePrivacyDlpV2HybridInspectStatistics withPendingCount(String pendingCount) {
        this.pendingCount = pendingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processedCount")
    public String processedCount;
    public GooglePrivacyDlpV2HybridInspectStatistics withProcessedCount(String processedCount) {
        this.processedCount = processedCount;
        return this;
    }
}