package openapisdk.models.operations;


public enum GetOccupantsNearOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetOccupantsNearOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
