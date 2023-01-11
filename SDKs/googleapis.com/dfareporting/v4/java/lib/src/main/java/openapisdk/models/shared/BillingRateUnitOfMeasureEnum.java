package openapisdk.models.shared;


public enum BillingRateUnitOfMeasureEnum {
    CPM("CPM"),
    CPC("CPC"),
    EA("EA"),
    P2_C("P2C");

    public final String value;

    private BillingRateUnitOfMeasureEnum(String value) {
        this.value = value;
    }
}
