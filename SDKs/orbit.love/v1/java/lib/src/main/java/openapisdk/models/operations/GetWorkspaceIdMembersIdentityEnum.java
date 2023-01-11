package openapisdk.models.operations;


public enum GetWorkspaceIdMembersIdentityEnum {
    GITHUB("github"),
    TWITTER("twitter"),
    EMAIL("email"),
    DISCOURSE("discourse"),
    LINKEDIN("linkedin"),
    DEVTO("devto"),
    SLACK("slack"),
    DISCORD("discord");

    public final String value;

    private GetWorkspaceIdMembersIdentityEnum(String value) {
        this.value = value;
    }
}
