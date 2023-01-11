package openapisdk.models.operations;


public enum BooksMylibraryReadingpositionsSetPositionActionEnum {
    ACTION_UNDEFINED("ACTION_UNDEFINED"),
    BOOKMARK("bookmark"),
    CHAPTER("chapter"),
    NEXT_PAGE("next-page"),
    PREV_PAGE("prev-page"),
    SCROLL("scroll"),
    SEARCH("search");

    public final String value;

    private BooksMylibraryReadingpositionsSetPositionActionEnum(String value) {
        this.value = value;
    }
}
