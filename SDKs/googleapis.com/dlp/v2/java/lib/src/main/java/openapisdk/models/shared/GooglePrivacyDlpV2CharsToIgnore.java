package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CharsToIgnore
 * Characters to skip when doing deidentification of a value. These will be left alone and skipped.
**/
public class GooglePrivacyDlpV2CharsToIgnore {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charactersToSkip")
    public String charactersToSkip;
    public GooglePrivacyDlpV2CharsToIgnore withCharactersToSkip(String charactersToSkip) {
        this.charactersToSkip = charactersToSkip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonCharactersToIgnore")
    public GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum commonCharactersToIgnore;
    public GooglePrivacyDlpV2CharsToIgnore withCommonCharactersToIgnore(GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum commonCharactersToIgnore) {
        this.commonCharactersToIgnore = commonCharactersToIgnore;
        return this;
    }
}