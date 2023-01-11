package openapisdk.models.shared;


public enum OrderContactContactTypeEnum {
    PLANNING_ORDER_CONTACT_BUYER_CONTACT("PLANNING_ORDER_CONTACT_BUYER_CONTACT"),
    PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT("PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT"),
    PLANNING_ORDER_CONTACT_SELLER_CONTACT("PLANNING_ORDER_CONTACT_SELLER_CONTACT");

    public final String value;

    private OrderContactContactTypeEnum(String value) {
        this.value = value;
    }
}
