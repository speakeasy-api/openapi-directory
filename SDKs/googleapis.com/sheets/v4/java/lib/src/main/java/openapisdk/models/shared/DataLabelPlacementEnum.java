package openapisdk.models.shared;


public enum DataLabelPlacementEnum {
    DATA_LABEL_PLACEMENT_UNSPECIFIED("DATA_LABEL_PLACEMENT_UNSPECIFIED"),
    CENTER("CENTER"),
    LEFT("LEFT"),
    RIGHT("RIGHT"),
    ABOVE("ABOVE"),
    BELOW("BELOW"),
    INSIDE_END("INSIDE_END"),
    INSIDE_BASE("INSIDE_BASE"),
    OUTSIDE_END("OUTSIDE_END");

    public final String value;

    private DataLabelPlacementEnum(String value) {
        this.value = value;
    }
}
