package openapisdk.models.shared;


public enum InvitationStatusEnum {
    ACCEPTED("ACCEPTED"),
    PENDING("PENDING"),
    DECLINED("DECLINED");

    public final String value;

    private InvitationStatusEnum(String value) {
        this.value = value;
    }
}
