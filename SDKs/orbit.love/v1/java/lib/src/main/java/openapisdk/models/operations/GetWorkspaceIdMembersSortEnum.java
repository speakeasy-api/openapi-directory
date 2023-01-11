package openapisdk.models.operations;


public enum GetWorkspaceIdMembersSortEnum {
    ACTIVITIES_COUNT("activities_count"),
    COMPANY("company"),
    CREATED_AT("created_at"),
    FIRST_ACTIVITY("first_activity"),
    GITHUB_FOLLOWERS("github_followers"),
    ID("id"),
    LAST_ACTIVITY("last_activity"),
    LOCATION("location"),
    LOVE("love"),
    NAME("name"),
    ORBIT("orbit"),
    REACH("reach"),
    TITLE("title"),
    TWITTER_FOLLOWERS("twitter_followers"),
    UPDATED_AT("updated_at");

    public final String value;

    private GetWorkspaceIdMembersSortEnum(String value) {
        this.value = value;
    }
}
