package openapisdk.models.shared;


public enum TargetTypeEnum {
    FREE("free"),
    SINGLE("single"),
    MULTI("multi");

    public final String value;

    private TargetTypeEnum(String value) {
        this.value = value;
    }
}
