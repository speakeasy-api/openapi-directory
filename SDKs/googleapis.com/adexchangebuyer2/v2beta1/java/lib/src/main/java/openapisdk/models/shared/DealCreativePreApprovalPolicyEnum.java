package openapisdk.models.shared;


public enum DealCreativePreApprovalPolicyEnum {
    CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED("CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED"),
    SELLER_PRE_APPROVAL_REQUIRED("SELLER_PRE_APPROVAL_REQUIRED"),
    SELLER_PRE_APPROVAL_NOT_REQUIRED("SELLER_PRE_APPROVAL_NOT_REQUIRED");

    public final String value;

    private DealCreativePreApprovalPolicyEnum(String value) {
        this.value = value;
    }
}
