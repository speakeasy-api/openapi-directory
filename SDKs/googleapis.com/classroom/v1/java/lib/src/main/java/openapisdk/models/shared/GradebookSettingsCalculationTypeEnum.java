package openapisdk.models.shared;


public enum GradebookSettingsCalculationTypeEnum {
    CALCULATION_TYPE_UNSPECIFIED("CALCULATION_TYPE_UNSPECIFIED"),
    TOTAL_POINTS("TOTAL_POINTS"),
    WEIGHTED_CATEGORIES("WEIGHTED_CATEGORIES");

    public final String value;

    private GradebookSettingsCalculationTypeEnum(String value) {
        this.value = value;
    }
}
