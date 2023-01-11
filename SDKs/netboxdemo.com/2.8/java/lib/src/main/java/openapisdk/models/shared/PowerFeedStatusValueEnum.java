package openapisdk.models.shared;


public enum PowerFeedStatusValueEnum {
    OFFLINE("offline"),
    ACTIVE("active"),
    PLANNED("planned"),
    FAILED("failed");

    public final String value;

    private PowerFeedStatusValueEnum(String value) {
        this.value = value;
    }
}
