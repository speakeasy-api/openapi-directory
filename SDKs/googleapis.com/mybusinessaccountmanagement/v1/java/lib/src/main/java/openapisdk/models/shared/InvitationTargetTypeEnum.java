package openapisdk.models.shared;


public enum InvitationTargetTypeEnum {
    TARGET_TYPE_UNSPECIFIED("TARGET_TYPE_UNSPECIFIED"),
    ACCOUNTS_ONLY("ACCOUNTS_ONLY"),
    LOCATIONS_ONLY("LOCATIONS_ONLY");

    public final String value;

    private InvitationTargetTypeEnum(String value) {
        this.value = value;
    }
}
