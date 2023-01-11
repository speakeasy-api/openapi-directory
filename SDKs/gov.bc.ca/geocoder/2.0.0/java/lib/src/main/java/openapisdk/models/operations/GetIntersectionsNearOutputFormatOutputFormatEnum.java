package openapisdk.models.operations;


public enum GetIntersectionsNearOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetIntersectionsNearOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
