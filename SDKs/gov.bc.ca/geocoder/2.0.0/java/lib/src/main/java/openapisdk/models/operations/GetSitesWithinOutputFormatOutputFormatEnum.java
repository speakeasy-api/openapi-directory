package openapisdk.models.operations;


public enum GetSitesWithinOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetSitesWithinOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
