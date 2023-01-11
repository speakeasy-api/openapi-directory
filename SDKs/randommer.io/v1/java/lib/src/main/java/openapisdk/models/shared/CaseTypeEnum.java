package openapisdk.models.shared;


public enum CaseTypeEnum {
    LOWER_CASE("LowerCase"),
    UPPER_CASE("UpperCase"),
    SENTENCE_CASE("SentenceCase"),
    TITLE_CASE("TitleCase");

    public final String value;

    private CaseTypeEnum(String value) {
        this.value = value;
    }
}
