package openapisdk.models.shared;


public enum DirectionEnum {
    INBOUND("inbound"),
    OUTBOUND("outbound");

    public final String value;

    private DirectionEnum(String value) {
        this.value = value;
    }
}
