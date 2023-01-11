package openapisdk.models.shared;


public enum DirectionEnum {
    OUTBOUND("outbound"),
    INBOUND("inbound");

    public final String value;

    private DirectionEnum(String value) {
        this.value = value;
    }
}
