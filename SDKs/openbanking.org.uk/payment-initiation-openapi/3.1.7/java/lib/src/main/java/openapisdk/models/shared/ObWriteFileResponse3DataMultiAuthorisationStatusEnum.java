package openapisdk.models.shared;


public enum ObWriteFileResponse3DataMultiAuthorisationStatusEnum {
    AUTHORISED("Authorised"),
    AWAITING_FURTHER_AUTHORISATION("AwaitingFurtherAuthorisation"),
    REJECTED("Rejected");

    public final String value;

    private ObWriteFileResponse3DataMultiAuthorisationStatusEnum(String value) {
        this.value = value;
    }
}
