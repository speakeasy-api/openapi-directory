package openapisdk.models.shared;


public enum ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum {
    AUTHORISED("Authorised"),
    AWAITING_FURTHER_AUTHORISATION("AwaitingFurtherAuthorisation"),
    REJECTED("Rejected");

    public final String value;

    private ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum(String value) {
        this.value = value;
    }
}
