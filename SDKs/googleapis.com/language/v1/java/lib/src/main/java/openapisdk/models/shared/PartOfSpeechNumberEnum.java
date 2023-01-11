package openapisdk.models.shared;


public enum PartOfSpeechNumberEnum {
    NUMBER_UNKNOWN("NUMBER_UNKNOWN"),
    SINGULAR("SINGULAR"),
    PLURAL("PLURAL"),
    DUAL("DUAL");

    public final String value;

    private PartOfSpeechNumberEnum(String value) {
        this.value = value;
    }
}
