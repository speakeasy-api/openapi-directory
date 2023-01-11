package openapisdk.models.shared;


public enum PersonIncludeEnum {
    OTHER_NAMES("other_names"),
    OTHER_IDENTIFIERS("other_identifiers"),
    LINKS("links"),
    SOURCES("sources"),
    OFFICES("offices");

    public final String value;

    private PersonIncludeEnum(String value) {
        this.value = value;
    }
}
