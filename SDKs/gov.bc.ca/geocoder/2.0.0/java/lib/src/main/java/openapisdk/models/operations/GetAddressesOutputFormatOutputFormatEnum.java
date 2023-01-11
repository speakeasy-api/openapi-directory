package openapisdk.models.operations;


public enum GetAddressesOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetAddressesOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
