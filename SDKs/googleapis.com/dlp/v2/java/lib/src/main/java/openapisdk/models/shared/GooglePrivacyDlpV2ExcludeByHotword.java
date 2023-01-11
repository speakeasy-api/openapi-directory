package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ExcludeByHotword
 * The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if it belongs to a BigQuery column that matches a specific pattern.
**/
public class GooglePrivacyDlpV2ExcludeByHotword {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hotwordRegex")
    public GooglePrivacyDlpV2Regex hotwordRegex;
    public GooglePrivacyDlpV2ExcludeByHotword withHotwordRegex(GooglePrivacyDlpV2Regex hotwordRegex) {
        this.hotwordRegex = hotwordRegex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximity")
    public GooglePrivacyDlpV2Proximity proximity;
    public GooglePrivacyDlpV2ExcludeByHotword withProximity(GooglePrivacyDlpV2Proximity proximity) {
        this.proximity = proximity;
        return this;
    }
}