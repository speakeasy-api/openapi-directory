package openapisdk.models.operations;


public enum GetPortfolioVideosSortEnum {
    ALPHABETICAL("alphabetical"),
    COMMENTS("comments"),
    DATE("date"),
    DEFAULT_("default"),
    LIKES("likes"),
    MANUAL("manual"),
    PLAYS("plays");

    public final String value;

    private GetPortfolioVideosSortEnum(String value) {
        this.value = value;
    }
}
