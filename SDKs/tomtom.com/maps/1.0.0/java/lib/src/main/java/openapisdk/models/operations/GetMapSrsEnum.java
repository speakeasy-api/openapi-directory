package openapisdk.models.operations;


public enum GetMapSrsEnum {
    EPSG3857("EPSG:3857"),
    EPSG4326("EPSG:4326");

    public final String value;

    private GetMapSrsEnum(String value) {
        this.value = value;
    }
}
