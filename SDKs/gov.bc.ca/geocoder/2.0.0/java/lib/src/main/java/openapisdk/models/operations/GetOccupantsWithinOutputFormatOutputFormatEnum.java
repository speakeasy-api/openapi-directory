package openapisdk.models.operations;


public enum GetOccupantsWithinOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetOccupantsWithinOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
