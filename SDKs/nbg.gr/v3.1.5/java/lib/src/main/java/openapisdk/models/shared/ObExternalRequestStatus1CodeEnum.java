package openapisdk.models.shared;


public enum ObExternalRequestStatus1CodeEnum {
    AUTHORISED("Authorised"),
    AWAITING_AUTHORISATION("AwaitingAuthorisation"),
    REJECTED("Rejected"),
    REVOKED("Revoked");

    public final String value;

    private ObExternalRequestStatus1CodeEnum(String value) {
        this.value = value;
    }
}
