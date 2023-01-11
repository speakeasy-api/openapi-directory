package openapisdk.models.shared;


public enum PermissionFrequencyUnitEnum {
    HOUR("HOUR"),
    WEEK("WEEK"),
    DAY("DAY"),
    MONTH("MONTH"),
    YEAR("YEAR");

    public final String value;

    private PermissionFrequencyUnitEnum(String value) {
        this.value = value;
    }
}
