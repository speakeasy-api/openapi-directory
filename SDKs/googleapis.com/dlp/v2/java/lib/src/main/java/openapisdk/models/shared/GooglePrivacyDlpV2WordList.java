package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2WordList
 * Message defining a list of words or phrases to search for in the data.
**/
public class GooglePrivacyDlpV2WordList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("words")
    public String[] words;
    public GooglePrivacyDlpV2WordList withWords(String[] words) {
        this.words = words;
        return this;
    }
}