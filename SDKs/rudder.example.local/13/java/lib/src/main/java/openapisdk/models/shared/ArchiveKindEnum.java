package openapisdk.models.shared;


public enum ArchiveKindEnum {
    FULL("full"),
    GROUPS("groups"),
    RULES("rules"),
    DIRECTIVES("directives"),
    PARAMETERS("parameters");

    public final String value;

    private ArchiveKindEnum(String value) {
        this.value = value;
    }
}
