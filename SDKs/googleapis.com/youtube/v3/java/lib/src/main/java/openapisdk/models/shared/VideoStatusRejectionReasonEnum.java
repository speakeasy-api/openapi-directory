package openapisdk.models.shared;


public enum VideoStatusRejectionReasonEnum {
    COPYRIGHT("copyright"),
    INAPPROPRIATE("inappropriate"),
    DUPLICATE("duplicate"),
    TERMS_OF_USE("termsOfUse"),
    UPLOADER_ACCOUNT_SUSPENDED("uploaderAccountSuspended"),
    LENGTH("length"),
    CLAIM("claim"),
    UPLOADER_ACCOUNT_CLOSED("uploaderAccountClosed"),
    TRADEMARK("trademark"),
    LEGAL("legal");

    public final String value;

    private VideoStatusRejectionReasonEnum(String value) {
        this.value = value;
    }
}
