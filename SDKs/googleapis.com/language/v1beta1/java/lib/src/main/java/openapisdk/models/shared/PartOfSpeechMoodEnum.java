package openapisdk.models.shared;


public enum PartOfSpeechMoodEnum {
    MOOD_UNKNOWN("MOOD_UNKNOWN"),
    CONDITIONAL_MOOD("CONDITIONAL_MOOD"),
    IMPERATIVE("IMPERATIVE"),
    INDICATIVE("INDICATIVE"),
    INTERROGATIVE("INTERROGATIVE"),
    JUSSIVE("JUSSIVE"),
    SUBJUNCTIVE("SUBJUNCTIVE");

    public final String value;

    private PartOfSpeechMoodEnum(String value) {
        this.value = value;
    }
}
