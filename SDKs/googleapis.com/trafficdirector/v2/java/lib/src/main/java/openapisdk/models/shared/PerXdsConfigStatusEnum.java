package openapisdk.models.shared;


public enum PerXdsConfigStatusEnum {
    UNKNOWN("UNKNOWN"),
    SYNCED("SYNCED"),
    NOT_SENT("NOT_SENT"),
    STALE("STALE"),
    ERROR("ERROR");

    public final String value;

    private PerXdsConfigStatusEnum(String value) {
        this.value = value;
    }
}
