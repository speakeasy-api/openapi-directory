package openapisdk.models.operations;


public enum BooksVolumesListFilterEnum {
    FILTER_UNDEFINED("FILTER_UNDEFINED"),
    EBOOKS("ebooks"),
    FREE_EBOOKS("free-ebooks"),
    FULL("full"),
    PAID_EBOOKS("paid-ebooks"),
    PARTIAL("partial");

    public final String value;

    private BooksVolumesListFilterEnum(String value) {
        this.value = value;
    }
}
