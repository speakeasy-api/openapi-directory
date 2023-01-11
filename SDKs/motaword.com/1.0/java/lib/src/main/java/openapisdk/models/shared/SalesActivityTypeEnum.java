package openapisdk.models.shared;


public enum SalesActivityTypeEnum {
    EMAIL("EMAIL"),
    NOTE("NOTE"),
    INCOMING_EMAIL("INCOMING_EMAIL"),
    TASK("TASK");

    public final String value;

    private SalesActivityTypeEnum(String value) {
        this.value = value;
    }
}
