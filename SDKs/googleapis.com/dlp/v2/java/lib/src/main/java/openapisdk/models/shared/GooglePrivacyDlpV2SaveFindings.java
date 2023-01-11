package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2SaveFindings
 * If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk
**/
public class GooglePrivacyDlpV2SaveFindings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputConfig")
    public GooglePrivacyDlpV2OutputStorageConfig outputConfig;
    public GooglePrivacyDlpV2SaveFindings withOutputConfig(GooglePrivacyDlpV2OutputStorageConfig outputConfig) {
        this.outputConfig = outputConfig;
        return this;
    }
}