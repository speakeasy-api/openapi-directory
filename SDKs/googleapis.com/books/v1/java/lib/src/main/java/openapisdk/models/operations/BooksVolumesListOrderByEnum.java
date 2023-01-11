package openapisdk.models.operations;


public enum BooksVolumesListOrderByEnum {
    ORDER_BY_UNDEFINED("ORDER_BY_UNDEFINED"),
    NEWEST("newest"),
    RELEVANCE("relevance");

    public final String value;

    private BooksVolumesListOrderByEnum(String value) {
        this.value = value;
    }
}
