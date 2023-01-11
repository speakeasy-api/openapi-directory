package openapisdk.models.shared;


public enum PartOfSpeechCaseEnum {
    CASE_UNKNOWN("CASE_UNKNOWN"),
    ACCUSATIVE("ACCUSATIVE"),
    ADVERBIAL("ADVERBIAL"),
    COMPLEMENTIVE("COMPLEMENTIVE"),
    DATIVE("DATIVE"),
    GENITIVE("GENITIVE"),
    INSTRUMENTAL("INSTRUMENTAL"),
    LOCATIVE("LOCATIVE"),
    NOMINATIVE("NOMINATIVE"),
    OBLIQUE("OBLIQUE"),
    PARTITIVE("PARTITIVE"),
    PREPOSITIONAL("PREPOSITIONAL"),
    REFLEXIVE_CASE("REFLEXIVE_CASE"),
    RELATIVE_CASE("RELATIVE_CASE"),
    VOCATIVE("VOCATIVE");

    public final String value;

    private PartOfSpeechCaseEnum(String value) {
        this.value = value;
    }
}
