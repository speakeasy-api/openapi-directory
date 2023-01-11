package openapisdk.models.shared;


public enum LabelChargeEventEnum {
    CARRIER_DEFAULT("carrier_default"),
    ON_CREATION("on_creation"),
    ON_CARRIER_ACCEPTANCE("on_carrier_acceptance");

    public final String value;

    private LabelChargeEventEnum(String value) {
        this.value = value;
    }
}
