package openapisdk.models.shared;


public enum GradebookSettingsDisplaySettingEnum {
    DISPLAY_SETTING_UNSPECIFIED("DISPLAY_SETTING_UNSPECIFIED"),
    SHOW_OVERALL_GRADE("SHOW_OVERALL_GRADE"),
    HIDE_OVERALL_GRADE("HIDE_OVERALL_GRADE"),
    SHOW_TEACHERS_ONLY("SHOW_TEACHERS_ONLY");

    public final String value;

    private GradebookSettingsDisplaySettingEnum(String value) {
        this.value = value;
    }
}
