package openapisdk.models.shared;


public enum SandboxIncomeFireWebhookRequestVerificationStatusEnum {
    VERIFICATION_STATUS_PROCESSING_COMPLETE("VERIFICATION_STATUS_PROCESSING_COMPLETE"),
    VERIFICATION_STATUS_DOCUMENT_REJECTED("VERIFICATION_STATUS_DOCUMENT_REJECTED"),
    VERIFICATION_STATUS_PROCESSING_FAILED("VERIFICATION_STATUS_PROCESSING_FAILED");

    public final String value;

    private SandboxIncomeFireWebhookRequestVerificationStatusEnum(String value) {
        this.value = value;
    }
}
