package openapisdk.models.operations;


public enum GetSitesSiteIdOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetSitesSiteIdOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
