package openapisdk.models.shared;


public enum MultiClusterIngressFeatureSpecBillingEnum {
    BILLING_UNSPECIFIED("BILLING_UNSPECIFIED"),
    PAY_AS_YOU_GO("PAY_AS_YOU_GO"),
    ANTHOS_LICENSE("ANTHOS_LICENSE");

    public final String value;

    private MultiClusterIngressFeatureSpecBillingEnum(String value) {
        this.value = value;
    }
}
