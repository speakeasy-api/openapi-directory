package openapisdk.models.shared;


public enum JobVisibilityEnum {
    VISIBILITY_UNSPECIFIED("VISIBILITY_UNSPECIFIED"),
    ACCOUNT_ONLY("ACCOUNT_ONLY"),
    SHARED_WITH_GOOGLE("SHARED_WITH_GOOGLE"),
    SHARED_WITH_PUBLIC("SHARED_WITH_PUBLIC");

    public final String value;

    private JobVisibilityEnum(String value) {
        this.value = value;
    }
}
