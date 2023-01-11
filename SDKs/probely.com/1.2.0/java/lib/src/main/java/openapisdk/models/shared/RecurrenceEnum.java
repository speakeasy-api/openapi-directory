package openapisdk.models.shared;


public enum RecurrenceEnum {
    D("d"),
    W("w"),
    M("m"),
    Q("q"),
    UNKNOWN("");

    public final String value;

    private RecurrenceEnum(String value) {
        this.value = value;
    }
}
