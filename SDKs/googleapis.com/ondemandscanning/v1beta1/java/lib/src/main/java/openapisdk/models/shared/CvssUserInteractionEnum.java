package openapisdk.models.shared;


public enum CvssUserInteractionEnum {
    USER_INTERACTION_UNSPECIFIED("USER_INTERACTION_UNSPECIFIED"),
    USER_INTERACTION_NONE("USER_INTERACTION_NONE"),
    USER_INTERACTION_REQUIRED("USER_INTERACTION_REQUIRED");

    public final String value;

    private CvssUserInteractionEnum(String value) {
        this.value = value;
    }
}
