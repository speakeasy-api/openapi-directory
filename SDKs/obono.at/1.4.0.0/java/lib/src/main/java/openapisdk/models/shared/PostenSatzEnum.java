package openapisdk.models.shared;


public enum PostenSatzEnum {
    NORMAL("NORMAL"),
    ERMAESSIGT1("ERMAESSIGT1"),
    ERMAESSIGT2("ERMAESSIGT2"),
    BESONDERS("BESONDERS"),
    NULL_("NULL");

    public final String value;

    private PostenSatzEnum(String value) {
        this.value = value;
    }
}
