package openapisdk.models.shared;


public enum TemporalEnum {
    DAY("day"),
    MONTH("month"),
    YEAR("year"),
    MOY("moy"),
    DOW("dow"),
    HOUR("hour"),
    HOD("hod");

    public final String value;

    private TemporalEnum(String value) {
        this.value = value;
    }
}
