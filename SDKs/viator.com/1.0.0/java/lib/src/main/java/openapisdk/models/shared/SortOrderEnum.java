package openapisdk.models.shared;


public enum SortOrderEnum {
    TOP_SELLERS("TOP_SELLERS"),
    REVIEW_AVG_RATING_A("REVIEW_AVG_RATING_A"),
    REVIEW_AVG_RATING_D("REVIEW_AVG_RATING_D"),
    PRICE_FROM_A("PRICE_FROM_A"),
    PRICE_FROM_D("PRICE_FROM_D");

    public final String value;

    private SortOrderEnum(String value) {
        this.value = value;
    }
}
