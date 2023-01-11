package openapisdk.models.shared;


public enum ObRisk1PaymentContextCodeEnum {
    BILL_PAYMENT("BillPayment"),
    ECOMMERCE_GOODS("EcommerceGoods"),
    ECOMMERCE_SERVICES("EcommerceServices"),
    OTHER("Other"),
    PARTY_TO_PARTY("PartyToParty");

    public final String value;

    private ObRisk1PaymentContextCodeEnum(String value) {
        this.value = value;
    }
}
