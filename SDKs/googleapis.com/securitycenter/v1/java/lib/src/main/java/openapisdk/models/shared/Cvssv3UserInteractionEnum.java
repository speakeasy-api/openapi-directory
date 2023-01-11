package openapisdk.models.shared;


public enum Cvssv3UserInteractionEnum {
    USER_INTERACTION_UNSPECIFIED("USER_INTERACTION_UNSPECIFIED"),
    USER_INTERACTION_NONE("USER_INTERACTION_NONE"),
    USER_INTERACTION_REQUIRED("USER_INTERACTION_REQUIRED");

    public final String value;

    private Cvssv3UserInteractionEnum(String value) {
        this.value = value;
    }
}
