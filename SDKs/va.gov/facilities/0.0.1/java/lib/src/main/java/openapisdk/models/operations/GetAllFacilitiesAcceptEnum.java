package openapisdk.models.operations;


public enum GetAllFacilitiesAcceptEnum {
    APPLICATION_GEO_PLUS_JSON("application/geo+json"),
    APPLICATION_VND_GEO_PLUS_JSON("application/vnd.geo+json"),
    TEXT_CSV("text/csv");

    public final String value;

    private GetAllFacilitiesAcceptEnum(String value) {
        this.value = value;
    }
}
