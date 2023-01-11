package openapisdk.models.shared;


public enum GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum {
    REASON_UNSPECIFIED("REASON_UNSPECIFIED"),
    PENDING_TOS_ACCEPTANCE("PENDING_TOS_ACCEPTANCE"),
    SKU_NOT_ELIGIBLE("SKU_NOT_ELIGIBLE"),
    SKU_SUSPENDED("SKU_SUSPENDED");

    public final String value;

    private GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum(String value) {
        this.value = value;
    }
}
