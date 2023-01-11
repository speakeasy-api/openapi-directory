package openapisdk.models.shared;


public enum ViewEnum {
    UNIFIED("Unified"),
    IN("IN"),
    PK("PK"),
    IL("IL"),
    MA("MA");

    public final String value;

    private ViewEnum(String value) {
        this.value = value;
    }
}
