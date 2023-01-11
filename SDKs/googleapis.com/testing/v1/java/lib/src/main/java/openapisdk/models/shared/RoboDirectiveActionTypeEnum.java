package openapisdk.models.shared;


public enum RoboDirectiveActionTypeEnum {
    ACTION_TYPE_UNSPECIFIED("ACTION_TYPE_UNSPECIFIED"),
    SINGLE_CLICK("SINGLE_CLICK"),
    ENTER_TEXT("ENTER_TEXT"),
    IGNORE("IGNORE");

    public final String value;

    private RoboDirectiveActionTypeEnum(String value) {
        this.value = value;
    }
}
