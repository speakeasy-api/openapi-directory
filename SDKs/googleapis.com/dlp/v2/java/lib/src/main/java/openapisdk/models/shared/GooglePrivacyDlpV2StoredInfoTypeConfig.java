package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2StoredInfoTypeConfig
 * Configuration for stored infoTypes. All fields and subfield are provided by the user. For more information, see https://cloud.google.com/dlp/docs/creating-custom-infotypes.
**/
public class GooglePrivacyDlpV2StoredInfoTypeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GooglePrivacyDlpV2StoredInfoTypeConfig withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dictionary")
    public GooglePrivacyDlpV2Dictionary dictionary;
    public GooglePrivacyDlpV2StoredInfoTypeConfig withDictionary(GooglePrivacyDlpV2Dictionary dictionary) {
        this.dictionary = dictionary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GooglePrivacyDlpV2StoredInfoTypeConfig withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("largeCustomDictionary")
    public GooglePrivacyDlpV2LargeCustomDictionaryConfig largeCustomDictionary;
    public GooglePrivacyDlpV2StoredInfoTypeConfig withLargeCustomDictionary(GooglePrivacyDlpV2LargeCustomDictionaryConfig largeCustomDictionary) {
        this.largeCustomDictionary = largeCustomDictionary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public GooglePrivacyDlpV2Regex regex;
    public GooglePrivacyDlpV2StoredInfoTypeConfig withRegex(GooglePrivacyDlpV2Regex regex) {
        this.regex = regex;
        return this;
    }
}