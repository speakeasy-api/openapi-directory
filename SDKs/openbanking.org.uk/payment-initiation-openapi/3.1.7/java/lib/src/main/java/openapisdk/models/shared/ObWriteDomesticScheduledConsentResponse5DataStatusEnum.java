package openapisdk.models.shared;


public enum ObWriteDomesticScheduledConsentResponse5DataStatusEnum {
    AUTHORISED("Authorised"),
    AWAITING_AUTHORISATION("AwaitingAuthorisation"),
    CONSUMED("Consumed"),
    REJECTED("Rejected");

    public final String value;

    private ObWriteDomesticScheduledConsentResponse5DataStatusEnum(String value) {
        this.value = value;
    }
}
