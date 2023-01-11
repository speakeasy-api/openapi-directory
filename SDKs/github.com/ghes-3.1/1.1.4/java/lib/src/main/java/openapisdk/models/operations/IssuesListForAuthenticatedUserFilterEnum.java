package openapisdk.models.operations;


public enum IssuesListForAuthenticatedUserFilterEnum {
    ASSIGNED("assigned"),
    CREATED("created"),
    MENTIONED("mentioned"),
    SUBSCRIBED("subscribed"),
    REPOS("repos"),
    ALL("all");

    public final String value;

    private IssuesListForAuthenticatedUserFilterEnum(String value) {
        this.value = value;
    }
}
