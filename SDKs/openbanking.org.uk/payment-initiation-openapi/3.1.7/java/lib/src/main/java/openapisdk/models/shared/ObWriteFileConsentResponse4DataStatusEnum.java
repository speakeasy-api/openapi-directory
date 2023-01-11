package openapisdk.models.shared;


public enum ObWriteFileConsentResponse4DataStatusEnum {
    AUTHORISED("Authorised"),
    AWAITING_AUTHORISATION("AwaitingAuthorisation"),
    AWAITING_UPLOAD("AwaitingUpload"),
    CONSUMED("Consumed"),
    REJECTED("Rejected");

    public final String value;

    private ObWriteFileConsentResponse4DataStatusEnum(String value) {
        this.value = value;
    }
}
