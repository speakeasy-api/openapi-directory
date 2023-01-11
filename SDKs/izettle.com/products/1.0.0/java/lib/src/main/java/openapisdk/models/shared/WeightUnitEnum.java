package openapisdk.models.shared;


public enum WeightUnitEnum {
    KG("kg"),
    G("g"),
    OZ("oz"),
    LB("lb");

    public final String value;

    private WeightUnitEnum(String value) {
        this.value = value;
    }
}
