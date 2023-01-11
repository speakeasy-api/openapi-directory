package openapisdk.models.shared;


public enum ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum {
    DETAIL_TYPE_UNSPECIFIED("DETAIL_TYPE_UNSPECIFIED"),
    CREATIVE_ATTRIBUTE("CREATIVE_ATTRIBUTE"),
    VENDOR("VENDOR"),
    SENSITIVE_CATEGORY("SENSITIVE_CATEGORY"),
    PRODUCT_CATEGORY("PRODUCT_CATEGORY"),
    DISAPPROVAL_REASON("DISAPPROVAL_REASON"),
    POLICY_TOPIC("POLICY_TOPIC"),
    ATP_VENDOR("ATP_VENDOR"),
    VENDOR_DOMAIN("VENDOR_DOMAIN"),
    GVL_ID("GVL_ID");

    public final String value;

    private ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum(String value) {
        this.value = value;
    }
}
