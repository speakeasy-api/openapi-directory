package openapisdk.models.shared;


public enum AndroidNotificationVisibilityEnum {
    VISIBILITY_UNSPECIFIED("VISIBILITY_UNSPECIFIED"),
    PRIVATE_("PRIVATE"),
    PUBLIC_("PUBLIC"),
    SECRET("SECRET");

    public final String value;

    private AndroidNotificationVisibilityEnum(String value) {
        this.value = value;
    }
}
