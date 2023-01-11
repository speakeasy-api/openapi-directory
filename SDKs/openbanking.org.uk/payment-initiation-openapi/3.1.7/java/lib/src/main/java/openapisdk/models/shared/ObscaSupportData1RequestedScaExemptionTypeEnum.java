package openapisdk.models.shared;


public enum ObscaSupportData1RequestedScaExemptionTypeEnum {
    BILL_PAYMENT("BillPayment"),
    CONTACTLESS_TRAVEL("ContactlessTravel"),
    ECOMMERCE_GOODS("EcommerceGoods"),
    ECOMMERCE_SERVICES("EcommerceServices"),
    KIOSK("Kiosk"),
    PARKING("Parking"),
    PARTY_TO_PARTY("PartyToParty");

    public final String value;

    private ObscaSupportData1RequestedScaExemptionTypeEnum(String value) {
        this.value = value;
    }
}
