package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CharacterMaskConfig
 * Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we'll attempt to preserve the original data's type. (This allows you to take a long like 123 and modify it to a string like **3.
**/
public class GooglePrivacyDlpV2CharacterMaskConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charactersToIgnore")
    public GooglePrivacyDlpV2CharsToIgnore[] charactersToIgnore;
    public GooglePrivacyDlpV2CharacterMaskConfig withCharactersToIgnore(GooglePrivacyDlpV2CharsToIgnore[] charactersToIgnore) {
        this.charactersToIgnore = charactersToIgnore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maskingCharacter")
    public String maskingCharacter;
    public GooglePrivacyDlpV2CharacterMaskConfig withMaskingCharacter(String maskingCharacter) {
        this.maskingCharacter = maskingCharacter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberToMask")
    public Integer numberToMask;
    public GooglePrivacyDlpV2CharacterMaskConfig withNumberToMask(Integer numberToMask) {
        this.numberToMask = numberToMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reverseOrder")
    public Boolean reverseOrder;
    public GooglePrivacyDlpV2CharacterMaskConfig withReverseOrder(Boolean reverseOrder) {
        this.reverseOrder = reverseOrder;
        return this;
    }
}