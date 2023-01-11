package openapisdk.models.shared;


public enum PartOfSpeechPersonEnum {
    PERSON_UNKNOWN("PERSON_UNKNOWN"),
    FIRST("FIRST"),
    SECOND("SECOND"),
    THIRD("THIRD"),
    REFLEXIVE_PERSON("REFLEXIVE_PERSON");

    public final String value;

    private PartOfSpeechPersonEnum(String value) {
        this.value = value;
    }
}
