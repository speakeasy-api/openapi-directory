package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ReplaceDictionaryConfig
 * Replace each input value with a value randomly selected from the dictionary.
**/
public class GooglePrivacyDlpV2ReplaceDictionaryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wordList")
    public GooglePrivacyDlpV2WordList wordList;
    public GooglePrivacyDlpV2ReplaceDictionaryConfig withWordList(GooglePrivacyDlpV2WordList wordList) {
        this.wordList = wordList;
        return this;
    }
}