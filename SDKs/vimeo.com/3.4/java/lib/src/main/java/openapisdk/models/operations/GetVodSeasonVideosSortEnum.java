package openapisdk.models.operations;


public enum GetVodSeasonVideosSortEnum {
    DATE("date"),
    DEFAULT_("default"),
    MANUAL("manual"),
    NAME("name"),
    PURCHASE_TIME("purchase_time"),
    RELEASE_DATE("release_date");

    public final String value;

    private GetVodSeasonVideosSortEnum(String value) {
        this.value = value;
    }
}
