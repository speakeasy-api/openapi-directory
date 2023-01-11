package openapisdk.models.shared;


public enum TaskViewEnum {
    VIEW_UNSPECIFIED("VIEW_UNSPECIFIED"),
    BASIC("BASIC"),
    FULL("FULL");

    public final String value;

    private TaskViewEnum(String value) {
        this.value = value;
    }
}
