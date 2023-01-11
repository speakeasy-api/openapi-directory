package openapisdk.models.shared;


public enum DestinationStatusStatusEnum {
    UNKNOWN("UNKNOWN"),
    ACTIVE("ACTIVE"),
    PENDING("PENDING"),
    DISAPPROVED("DISAPPROVED");

    public final String value;

    private DestinationStatusStatusEnum(String value) {
        this.value = value;
    }
}
