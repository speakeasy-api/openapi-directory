package openapisdk.models.operations;


public enum GetVodPurchasesSortEnum {
    ADDED("added"),
    ALPHABETICAL("alphabetical"),
    DATE("date"),
    NAME("name"),
    PURCHASE_TIME("purchase_time"),
    RATING("rating"),
    RELEASE_DATE("release_date");

    public final String value;

    private GetVodPurchasesSortEnum(String value) {
        this.value = value;
    }
}
