package openapisdk.models.operations;


public enum GetIntersectionsWithinOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetIntersectionsWithinOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
