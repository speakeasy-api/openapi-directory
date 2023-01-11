package openapisdk.models.operations;


public enum FacetsSortKeysEnum {
    SCORE_DESC("score,,desc"),
    SPATIAL_AREA_ASC("spatial_area,,asc"),
    SPATIAL_AREA_DESC("spatial_area,,desc"),
    TEMPORAL_DURATION_ASC("temporal_duration,,asc"),
    TEMPORAL_DURATION_DESC("temporal_duration,,desc"),
    UPDATED_DESC("updated,,desc");

    public final String value;

    private FacetsSortKeysEnum(String value) {
        this.value = value;
    }
}
