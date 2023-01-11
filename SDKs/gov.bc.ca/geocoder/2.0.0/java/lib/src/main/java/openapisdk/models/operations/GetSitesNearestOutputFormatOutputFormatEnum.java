package openapisdk.models.operations;


public enum GetSitesNearestOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetSitesNearestOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
