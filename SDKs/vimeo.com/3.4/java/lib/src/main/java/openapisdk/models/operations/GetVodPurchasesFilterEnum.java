package openapisdk.models.operations;


public enum GetVodPurchasesFilterEnum {
    ALL("all"),
    EXPIRING_SOON("expiring_soon"),
    FILM("film"),
    IMPORTANT("important"),
    PURCHASED("purchased"),
    RENTED("rented"),
    SERIES("series"),
    SUBSCRIPTION("subscription"),
    UNWATCHED("unwatched"),
    WATCHED("watched");

    public final String value;

    private GetVodPurchasesFilterEnum(String value) {
        this.value = value;
    }
}
