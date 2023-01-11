package openapisdk.models.shared;


public enum ObFundsConfirmationConsentResponse1DataStatusEnum {
    AUTHORISED("Authorised"),
    AWAITING_AUTHORISATION("AwaitingAuthorisation"),
    REJECTED("Rejected"),
    REVOKED("Revoked");

    public final String value;

    private ObFundsConfirmationConsentResponse1DataStatusEnum(String value) {
        this.value = value;
    }
}
