package openapisdk.models.shared;


public enum OperatingStatusCodeEnum {
    NORMAL("NORMAL"),
    NOTICE("NOTICE"),
    LIMITED("LIMITED"),
    CLOSED("CLOSED");

    public final String value;

    private OperatingStatusCodeEnum(String value) {
        this.value = value;
    }
}
