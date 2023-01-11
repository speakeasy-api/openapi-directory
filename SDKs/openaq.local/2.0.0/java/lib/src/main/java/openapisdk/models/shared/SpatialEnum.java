package openapisdk.models.shared;


public enum SpatialEnum {
    COUNTRY("country"),
    LOCATION("location"),
    PROJECT("project"),
    TOTAL("total");

    public final String value;

    private SpatialEnum(String value) {
        this.value = value;
    }
}
