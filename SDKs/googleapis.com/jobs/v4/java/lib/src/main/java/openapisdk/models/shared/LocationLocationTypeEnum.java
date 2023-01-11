package openapisdk.models.shared;


public enum LocationLocationTypeEnum {
    LOCATION_TYPE_UNSPECIFIED("LOCATION_TYPE_UNSPECIFIED"),
    COUNTRY("COUNTRY"),
    ADMINISTRATIVE_AREA("ADMINISTRATIVE_AREA"),
    SUB_ADMINISTRATIVE_AREA("SUB_ADMINISTRATIVE_AREA"),
    LOCALITY("LOCALITY"),
    POSTAL_CODE("POSTAL_CODE"),
    SUB_LOCALITY("SUB_LOCALITY"),
    SUB_LOCALITY1("SUB_LOCALITY_1"),
    SUB_LOCALITY2("SUB_LOCALITY_2"),
    NEIGHBORHOOD("NEIGHBORHOOD"),
    STREET_ADDRESS("STREET_ADDRESS");

    public final String value;

    private LocationLocationTypeEnum(String value) {
        this.value = value;
    }
}
