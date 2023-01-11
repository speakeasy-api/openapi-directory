package openapisdk.models.operations;


public enum GetWorkspaceIdActivitiesIdentityEnum {
    GITHUB("github"),
    TWITTER("twitter"),
    EMAIL("email"),
    DISCOURSE("discourse"),
    LINKEDIN("linkedin"),
    DEVTO("devto"),
    SLACK("slack"),
    DISCORD("discord");

    public final String value;

    private GetWorkspaceIdActivitiesIdentityEnum(String value) {
        this.value = value;
    }
}
