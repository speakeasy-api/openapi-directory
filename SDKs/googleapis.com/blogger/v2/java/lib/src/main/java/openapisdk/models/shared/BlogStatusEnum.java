package openapisdk.models.shared;


public enum BlogStatusEnum {
    LIVE("LIVE"),
    DELETED("DELETED");

    public final String value;

    private BlogStatusEnum(String value) {
        this.value = value;
    }
}
