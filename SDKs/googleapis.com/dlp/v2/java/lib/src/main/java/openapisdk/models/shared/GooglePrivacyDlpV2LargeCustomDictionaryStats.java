package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2LargeCustomDictionaryStats
 * Summary statistics of a custom dictionary.
**/
public class GooglePrivacyDlpV2LargeCustomDictionaryStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approxNumPhrases")
    public String approxNumPhrases;
    public GooglePrivacyDlpV2LargeCustomDictionaryStats withApproxNumPhrases(String approxNumPhrases) {
        this.approxNumPhrases = approxNumPhrases;
        return this;
    }
}