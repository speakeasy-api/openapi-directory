package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InspectResult
 * All the findings for a single scanned item.
**/
public class GooglePrivacyDlpV2InspectResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findings")
    public GooglePrivacyDlpV2Finding[] findings;
    public GooglePrivacyDlpV2InspectResult withFindings(GooglePrivacyDlpV2Finding[] findings) {
        this.findings = findings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingsTruncated")
    public Boolean findingsTruncated;
    public GooglePrivacyDlpV2InspectResult withFindingsTruncated(Boolean findingsTruncated) {
        this.findingsTruncated = findingsTruncated;
        return this;
    }
}