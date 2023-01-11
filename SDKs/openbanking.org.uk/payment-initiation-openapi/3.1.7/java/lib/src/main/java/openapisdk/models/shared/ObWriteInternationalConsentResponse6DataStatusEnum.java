package openapisdk.models.shared;


public enum ObWriteInternationalConsentResponse6DataStatusEnum {
    AUTHORISED("Authorised"),
    AWAITING_AUTHORISATION("AwaitingAuthorisation"),
    CONSUMED("Consumed"),
    REJECTED("Rejected");

    public final String value;

    private ObWriteInternationalConsentResponse6DataStatusEnum(String value) {
        this.value = value;
    }
}
