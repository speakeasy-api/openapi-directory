package openapisdk.models.operations;


public enum TaxonomyAttractionsRequestBodySortOrderEnum {
    SEO_PUBLISHED_DATE_D("SEO_PUBLISHED_DATE_D"),
    SEO_PUBLISHED_DATE_A("SEO_PUBLISHED_DATE_A"),
    SEO_REVIEW_AVG_RATING_D("SEO_REVIEW_AVG_RATING_D"),
    SEO_REVIEW_AVG_RATING_A("SEO_REVIEW_AVG_RATING_A"),
    SEO_ALPHABETICAL("SEO_ALPHABETICAL");

    public final String value;

    private TaxonomyAttractionsRequestBodySortOrderEnum(String value) {
        this.value = value;
    }
}
