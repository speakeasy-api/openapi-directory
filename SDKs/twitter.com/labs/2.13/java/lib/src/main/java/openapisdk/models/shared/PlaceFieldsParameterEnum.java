package openapisdk.models.shared;


public enum PlaceFieldsParameterEnum {
    ID("id"),
    NAME("name"),
    COUNTRY_CODE("country_code"),
    PLACE_TYPE("place_type"),
    FULL_NAME("full_name"),
    COUNTRY("country"),
    CONTAINED_WITHIN("contained_within"),
    GEO("geo");

    public final String value;

    private PlaceFieldsParameterEnum(String value) {
        this.value = value;
    }
}
