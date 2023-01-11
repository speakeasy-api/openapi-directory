package openapisdk.models.shared;


public enum JsonPathMatcherJsonMatcherEnum {
    JSON_PATH_MATCHER_OPTION_UNSPECIFIED("JSON_PATH_MATCHER_OPTION_UNSPECIFIED"),
    EXACT_MATCH("EXACT_MATCH"),
    REGEX_MATCH("REGEX_MATCH");

    public final String value;

    private JsonPathMatcherJsonMatcherEnum(String value) {
        this.value = value;
    }
}
