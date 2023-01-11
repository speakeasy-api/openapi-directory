package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Result
 * All result fields mentioned below are updated while the job is processing.
**/
public class GooglePrivacyDlpV2Result {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hybridStats")
    public GooglePrivacyDlpV2HybridInspectStatistics hybridStats;
    public GooglePrivacyDlpV2Result withHybridStats(GooglePrivacyDlpV2HybridInspectStatistics hybridStats) {
        this.hybridStats = hybridStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoTypeStats")
    public GooglePrivacyDlpV2InfoTypeStats[] infoTypeStats;
    public GooglePrivacyDlpV2Result withInfoTypeStats(GooglePrivacyDlpV2InfoTypeStats[] infoTypeStats) {
        this.infoTypeStats = infoTypeStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processedBytes")
    public String processedBytes;
    public GooglePrivacyDlpV2Result withProcessedBytes(String processedBytes) {
        this.processedBytes = processedBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalEstimatedBytes")
    public String totalEstimatedBytes;
    public GooglePrivacyDlpV2Result withTotalEstimatedBytes(String totalEstimatedBytes) {
        this.totalEstimatedBytes = totalEstimatedBytes;
        return this;
    }
}