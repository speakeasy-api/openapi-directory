package openapisdk.models.shared;


public enum PlanChargeModelEnum {
    PER_UNIT("per_unit"),
    FLAT_FEE("flat_fee");

    public final String value;

    private PlanChargeModelEnum(String value) {
        this.value = value;
    }
}
