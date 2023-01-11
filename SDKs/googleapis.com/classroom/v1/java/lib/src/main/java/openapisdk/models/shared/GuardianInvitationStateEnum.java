package openapisdk.models.shared;


public enum GuardianInvitationStateEnum {
    GUARDIAN_INVITATION_STATE_UNSPECIFIED("GUARDIAN_INVITATION_STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    COMPLETE("COMPLETE");

    public final String value;

    private GuardianInvitationStateEnum(String value) {
        this.value = value;
    }
}
