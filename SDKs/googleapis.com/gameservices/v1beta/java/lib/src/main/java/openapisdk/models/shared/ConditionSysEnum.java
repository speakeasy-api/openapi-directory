package openapisdk.models.shared;


public enum ConditionSysEnum {
    NO_ATTR("NO_ATTR"),
    REGION("REGION"),
    SERVICE("SERVICE"),
    NAME("NAME"),
    IP("IP");

    public final String value;

    private ConditionSysEnum(String value) {
        this.value = value;
    }
}
