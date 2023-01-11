package openapisdk.models.shared;


public enum PartOfSpeechTenseEnum {
    TENSE_UNKNOWN("TENSE_UNKNOWN"),
    CONDITIONAL_TENSE("CONDITIONAL_TENSE"),
    FUTURE("FUTURE"),
    PAST("PAST"),
    PRESENT("PRESENT"),
    IMPERFECT("IMPERFECT"),
    PLUPERFECT("PLUPERFECT");

    public final String value;

    private PartOfSpeechTenseEnum(String value) {
        this.value = value;
    }
}
