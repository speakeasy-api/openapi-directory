package openapisdk.models.shared;


public enum ScanProfileEnum {
    SAFE("safe"),
    NORMAL("normal"),
    FULL("full"),
    LIGHTNING("lightning");

    public final String value;

    private ScanProfileEnum(String value) {
        this.value = value;
    }
}
