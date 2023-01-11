package openapisdk.models.shared;


public enum InAppProductPurchaseTypeEnum {
    PURCHASE_TYPE_UNSPECIFIED("purchaseTypeUnspecified"),
    MANAGED_USER("managedUser"),
    SUBSCRIPTION("subscription");

    public final String value;

    private InAppProductPurchaseTypeEnum(String value) {
        this.value = value;
    }
}
