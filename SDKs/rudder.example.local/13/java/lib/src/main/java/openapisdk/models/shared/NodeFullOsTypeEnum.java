package openapisdk.models.shared;


public enum NodeFullOsTypeEnum {
    WINDOWS("Windows"),
    LINUX("Linux"),
    AIX("AIX"),
    FREE_BSD("FreeBSD");

    public final String value;

    private NodeFullOsTypeEnum(String value) {
        this.value = value;
    }
}
