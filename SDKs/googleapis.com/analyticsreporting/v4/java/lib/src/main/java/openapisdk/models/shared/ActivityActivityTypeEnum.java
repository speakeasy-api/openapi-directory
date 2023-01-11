package openapisdk.models.shared;


public enum ActivityActivityTypeEnum {
    ACTIVITY_TYPE_UNSPECIFIED("ACTIVITY_TYPE_UNSPECIFIED"),
    PAGEVIEW("PAGEVIEW"),
    SCREENVIEW("SCREENVIEW"),
    GOAL("GOAL"),
    ECOMMERCE("ECOMMERCE"),
    EVENT("EVENT");

    public final String value;

    private ActivityActivityTypeEnum(String value) {
        this.value = value;
    }
}
