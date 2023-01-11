package openapisdk.models.shared;


public enum OsTypeEnum {
    LINUX("linux"),
    WINDOWS("windows"),
    SOLARIS("solaris"),
    AIX("aix"),
    FREEBSD("freebsd"),
    UNKNOWN("unknown");

    public final String value;

    private OsTypeEnum(String value) {
        this.value = value;
    }
}
