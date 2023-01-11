package openapisdk.models.shared;


public enum DynamicLinkEventStatEventEnum {
    DYNAMIC_LINK_EVENT_UNSPECIFIED("DYNAMIC_LINK_EVENT_UNSPECIFIED"),
    CLICK("CLICK"),
    REDIRECT("REDIRECT"),
    APP_INSTALL("APP_INSTALL"),
    APP_FIRST_OPEN("APP_FIRST_OPEN"),
    APP_RE_OPEN("APP_RE_OPEN");

    public final String value;

    private DynamicLinkEventStatEventEnum(String value) {
        this.value = value;
    }
}
