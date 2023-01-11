package openapisdk.models.operations;


public enum PostGeomarksNewRequestBodyResultFormatEnum {
    JSON("json"),
    XML("xml"),
    KML("kml"),
    KMZ("kmz"),
    SHP("shp"),
    SHPZ("shpz"),
    GEOJSON("geojson"),
    GML("gml"),
    WKT("wkt");

    public final String value;

    private PostGeomarksNewRequestBodyResultFormatEnum(String value) {
        this.value = value;
    }
}
