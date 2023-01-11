package openapisdk.models.shared;


public enum HoldCorpusEnum {
    CORPUS_TYPE_UNSPECIFIED("CORPUS_TYPE_UNSPECIFIED"),
    DRIVE("DRIVE"),
    MAIL("MAIL"),
    GROUPS("GROUPS"),
    HANGOUTS_CHAT("HANGOUTS_CHAT"),
    VOICE("VOICE");

    public final String value;

    private HoldCorpusEnum(String value) {
        this.value = value;
    }
}
