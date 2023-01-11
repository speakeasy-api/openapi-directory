package openapisdk.models.shared;


public enum SensorTypesEnum {
    REFERENCE_GRADE("reference grade"),
    LOW_COST_SENSOR("low-cost sensor");

    public final String value;

    private SensorTypesEnum(String value) {
        this.value = value;
    }
}
