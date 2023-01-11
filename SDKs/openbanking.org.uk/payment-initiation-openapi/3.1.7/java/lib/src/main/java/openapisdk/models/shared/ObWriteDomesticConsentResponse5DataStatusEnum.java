package openapisdk.models.shared;


public enum ObWriteDomesticConsentResponse5DataStatusEnum {
    AUTHORISED("Authorised"),
    AWAITING_AUTHORISATION("AwaitingAuthorisation"),
    CONSUMED("Consumed"),
    REJECTED("Rejected");

    public final String value;

    private ObWriteDomesticConsentResponse5DataStatusEnum(String value) {
        this.value = value;
    }
}
