package openapisdk.models.operations;


public enum GetOccupantsAddressesOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetOccupantsAddressesOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
