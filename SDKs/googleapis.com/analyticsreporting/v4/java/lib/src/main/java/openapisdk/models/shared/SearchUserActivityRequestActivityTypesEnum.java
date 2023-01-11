package openapisdk.models.shared;


public enum SearchUserActivityRequestActivityTypesEnum {
    ACTIVITY_TYPE_UNSPECIFIED("ACTIVITY_TYPE_UNSPECIFIED"),
    PAGEVIEW("PAGEVIEW"),
    SCREENVIEW("SCREENVIEW"),
    GOAL("GOAL"),
    ECOMMERCE("ECOMMERCE"),
    EVENT("EVENT");

    public final String value;

    private SearchUserActivityRequestActivityTypesEnum(String value) {
        this.value = value;
    }
}
