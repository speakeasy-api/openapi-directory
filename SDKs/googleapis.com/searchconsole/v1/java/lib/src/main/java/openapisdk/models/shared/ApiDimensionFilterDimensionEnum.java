package openapisdk.models.shared;


public enum ApiDimensionFilterDimensionEnum {
    QUERY("QUERY"),
    PAGE("PAGE"),
    COUNTRY("COUNTRY"),
    DEVICE("DEVICE"),
    SEARCH_APPEARANCE("SEARCH_APPEARANCE");

    public final String value;

    private ApiDimensionFilterDimensionEnum(String value) {
        this.value = value;
    }
}
