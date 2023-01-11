package openapisdk.models.shared;


public enum LocationTypeEnum {
    LOCATION_TYPE_UNSPECIFIED("LOCATION_TYPE_UNSPECIFIED"),
    REGIONAL("REGIONAL"),
    MULTI_REGIONAL("MULTI_REGIONAL");

    public final String value;

    private LocationTypeEnum(String value) {
        this.value = value;
    }
}
