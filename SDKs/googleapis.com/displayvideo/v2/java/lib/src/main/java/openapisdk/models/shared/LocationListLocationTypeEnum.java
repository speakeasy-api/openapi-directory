package openapisdk.models.shared;


public enum LocationListLocationTypeEnum {
    TARGETING_LOCATION_TYPE_UNSPECIFIED("TARGETING_LOCATION_TYPE_UNSPECIFIED"),
    TARGETING_LOCATION_TYPE_PROXIMITY("TARGETING_LOCATION_TYPE_PROXIMITY"),
    TARGETING_LOCATION_TYPE_REGIONAL("TARGETING_LOCATION_TYPE_REGIONAL");

    public final String value;

    private LocationListLocationTypeEnum(String value) {
        this.value = value;
    }
}
