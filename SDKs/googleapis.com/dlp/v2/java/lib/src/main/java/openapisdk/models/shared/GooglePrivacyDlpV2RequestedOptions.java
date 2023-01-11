package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2RequestedOptions
 * Snapshot of the inspection configuration.
**/
public class GooglePrivacyDlpV2RequestedOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobConfig")
    public GooglePrivacyDlpV2InspectJobConfig jobConfig;
    public GooglePrivacyDlpV2RequestedOptions withJobConfig(GooglePrivacyDlpV2InspectJobConfig jobConfig) {
        this.jobConfig = jobConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshotInspectTemplate")
    public GooglePrivacyDlpV2InspectTemplate snapshotInspectTemplate;
    public GooglePrivacyDlpV2RequestedOptions withSnapshotInspectTemplate(GooglePrivacyDlpV2InspectTemplate snapshotInspectTemplate) {
        this.snapshotInspectTemplate = snapshotInspectTemplate;
        return this;
    }
}