package openapisdk.models.shared;


public enum TagSettingKeywordOptionEnum {
    PLACEHOLDER_WITH_LIST_OF_KEYWORDS("PLACEHOLDER_WITH_LIST_OF_KEYWORDS"),
    IGNORE("IGNORE"),
    GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD("GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD");

    public final String value;

    private TagSettingKeywordOptionEnum(String value) {
        this.value = value;
    }
}
