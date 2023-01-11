package openapisdk.models.operations;


public enum GetOccupantsOccupantIdOutputFormatOutputFormatEnum {
    JSON("json"),
    GEOJSON("geojson"),
    XHTML("xhtml"),
    KML("kml"),
    GML("gml"),
    CSV("csv"),
    SHPZ("shpz");

    public final String value;

    private GetOccupantsOccupantIdOutputFormatOutputFormatEnum(String value) {
        this.value = value;
    }
}
