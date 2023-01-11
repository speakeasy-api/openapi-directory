package openapisdk.models.shared;


public enum BackfillJobTriggerEnum {
    TRIGGER_UNSPECIFIED("TRIGGER_UNSPECIFIED"),
    AUTOMATIC("AUTOMATIC"),
    MANUAL("MANUAL");

    public final String value;

    private BackfillJobTriggerEnum(String value) {
        this.value = value;
    }
}
