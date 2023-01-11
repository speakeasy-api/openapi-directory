package openapisdk.models.operations;


public enum GetSitesNearOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetSitesNearOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
