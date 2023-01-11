package openapisdk.models.shared;


public enum PartOfSpeechTagEnum {
    UNKNOWN("UNKNOWN"),
    ADJ("ADJ"),
    ADP("ADP"),
    ADV("ADV"),
    CONJ("CONJ"),
    DET("DET"),
    NOUN("NOUN"),
    NUM("NUM"),
    PRON("PRON"),
    PRT("PRT"),
    PUNCT("PUNCT"),
    VERB("VERB"),
    X("X"),
    AFFIX("AFFIX");

    public final String value;

    private PartOfSpeechTagEnum(String value) {
        this.value = value;
    }
}
