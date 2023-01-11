package openapisdk.models.operations;


public enum GetOccupantsNearestOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetOccupantsNearestOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
