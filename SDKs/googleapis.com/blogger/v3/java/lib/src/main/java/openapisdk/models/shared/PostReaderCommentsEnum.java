package openapisdk.models.shared;


public enum PostReaderCommentsEnum {
    ALLOW("ALLOW"),
    DONT_ALLOW_SHOW_EXISTING("DONT_ALLOW_SHOW_EXISTING"),
    DONT_ALLOW_HIDE_EXISTING("DONT_ALLOW_HIDE_EXISTING");

    public final String value;

    private PostReaderCommentsEnum(String value) {
        this.value = value;
    }
}
