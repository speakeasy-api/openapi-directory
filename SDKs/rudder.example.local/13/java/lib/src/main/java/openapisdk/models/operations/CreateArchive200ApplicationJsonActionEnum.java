package openapisdk.models.operations;


public enum CreateArchive200ApplicationJsonActionEnum {
    ARCHIVE_FULL("archiveFull"),
    ARCHIVE_GROUPS("archiveGroups"),
    ARCHIVE_RULES("archiveRules"),
    ARCHIVE_DIRECTIVES("archiveDirectives"),
    ARCHIVE_PARAMETERS("archiveParameters");

    public final String value;

    private CreateArchive200ApplicationJsonActionEnum(String value) {
        this.value = value;
    }
}
