package openapisdk.models.shared;


public enum SystemEventTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    USER_DELETION("USER_DELETION"),
    TRASH_AUTO_PURGE("TRASH_AUTO_PURGE");

    public final String value;

    private SystemEventTypeEnum(String value) {
        this.value = value;
    }
}
