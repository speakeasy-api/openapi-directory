package openapisdk.models.shared;


public enum OrderLineItemQuantitiesQuantityTypeEnum {
    AREA("Area"),
    COUNT("Count"),
    GROSS_WEIGHT("GrossWeight"),
    LENGTH("Length"),
    NET_NET_WEIGHT("NetNetWeight"),
    NET_WEIGHT("NetWeight"),
    NOMINAL_WEIGHT("NominalWeight"),
    TARE_WEIGHT("TareWeight");

    public final String value;

    private OrderLineItemQuantitiesQuantityTypeEnum(String value) {
        this.value = value;
    }
}
