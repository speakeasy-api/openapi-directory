package openapisdk.models.operations;


public enum GetIntersectionsNearestOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetIntersectionsNearestOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
