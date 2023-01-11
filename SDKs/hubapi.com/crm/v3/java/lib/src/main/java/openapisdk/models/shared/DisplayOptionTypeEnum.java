package openapisdk.models.shared;


public enum DisplayOptionTypeEnum {
    DEFAULT_("DEFAULT"),
    SUCCESS("SUCCESS"),
    WARNING("WARNING"),
    DANGER("DANGER"),
    INFO("INFO");

    public final String value;

    private DisplayOptionTypeEnum(String value) {
        this.value = value;
    }
}
