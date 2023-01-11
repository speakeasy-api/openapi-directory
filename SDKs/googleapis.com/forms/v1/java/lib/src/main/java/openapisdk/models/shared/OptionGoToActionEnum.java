package openapisdk.models.shared;


public enum OptionGoToActionEnum {
    GO_TO_ACTION_UNSPECIFIED("GO_TO_ACTION_UNSPECIFIED"),
    NEXT_SECTION("NEXT_SECTION"),
    RESTART_FORM("RESTART_FORM"),
    SUBMIT_FORM("SUBMIT_FORM");

    public final String value;

    private OptionGoToActionEnum(String value) {
        this.value = value;
    }
}
