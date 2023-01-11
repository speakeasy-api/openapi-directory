package openapisdk.models.shared;


public enum GeoTaxonomyTypeEnum {
    TYPE_UNSPECIFIED("TYPE_UNSPECIFIED"),
    GLOBAL("GLOBAL"),
    REGIONAL("REGIONAL"),
    MULTI_REGIONAL("MULTI_REGIONAL");

    public final String value;

    private GeoTaxonomyTypeEnum(String value) {
        this.value = value;
    }
}
