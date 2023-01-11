package openapisdk.models.shared;


public enum GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum {
    COMMON_CHARS_TO_IGNORE_UNSPECIFIED("COMMON_CHARS_TO_IGNORE_UNSPECIFIED"),
    NUMERIC("NUMERIC"),
    ALPHA_UPPER_CASE("ALPHA_UPPER_CASE"),
    ALPHA_LOWER_CASE("ALPHA_LOWER_CASE"),
    PUNCTUATION("PUNCTUATION"),
    WHITESPACE("WHITESPACE");

    public final String value;

    private GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnoreEnum(String value) {
        this.value = value;
    }
}
