package openapisdk.models.shared;


public enum ServiceEnumGeoMatchLevelEnum {
    AREA_CODE("area-code"),
    OVERLAY("overlay"),
    RADIUS("radius"),
    COUNTRY("country");

    public final String value;

    private ServiceEnumGeoMatchLevelEnum(String value) {
        this.value = value;
    }
}
