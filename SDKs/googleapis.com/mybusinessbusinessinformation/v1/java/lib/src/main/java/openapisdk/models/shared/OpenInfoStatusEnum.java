package openapisdk.models.shared;


public enum OpenInfoStatusEnum {
    OPEN_FOR_BUSINESS_UNSPECIFIED("OPEN_FOR_BUSINESS_UNSPECIFIED"),
    OPEN("OPEN"),
    CLOSED_PERMANENTLY("CLOSED_PERMANENTLY"),
    CLOSED_TEMPORARILY("CLOSED_TEMPORARILY");

    public final String value;

    private OpenInfoStatusEnum(String value) {
        this.value = value;
    }
}
