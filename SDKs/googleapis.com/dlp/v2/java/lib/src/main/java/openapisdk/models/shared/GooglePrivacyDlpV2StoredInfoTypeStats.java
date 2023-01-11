package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2StoredInfoTypeStats
 * Statistics for a StoredInfoType.
**/
public class GooglePrivacyDlpV2StoredInfoTypeStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largeCustomDictionary")
    public GooglePrivacyDlpV2LargeCustomDictionaryStats largeCustomDictionary;
    public GooglePrivacyDlpV2StoredInfoTypeStats withLargeCustomDictionary(GooglePrivacyDlpV2LargeCustomDictionaryStats largeCustomDictionary) {
        this.largeCustomDictionary = largeCustomDictionary;
        return this;
    }
}