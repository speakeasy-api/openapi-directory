package openapisdk.models.operations;


public enum GetVodVideosSortEnum {
    DATE("date"),
    DEFAULT_("default"),
    EPISODE("episode"),
    MANUAL("manual"),
    NAME("name"),
    PURCHASE_TIME("purchase_time"),
    RELEASE_DATE("release_date");

    public final String value;

    private GetVodVideosSortEnum(String value) {
        this.value = value;
    }
}
