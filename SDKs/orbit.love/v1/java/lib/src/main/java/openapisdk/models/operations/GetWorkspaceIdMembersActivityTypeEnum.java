package openapisdk.models.operations;


public enum GetWorkspaceIdMembersActivityTypeEnum {
    DISCORD_MESSAGE_SENT("discord:message:sent"),
    SLACK_THREAD_REPLIED("slack:thread:replied"),
    DISCORD_MESSAGE_REPLIED("discord:message:replied"),
    TWEET_SENT("tweet:sent"),
    TWITTER_FOLLOWED("twitter:followed"),
    DISCORD_SERVER_JOINED("discord:server:joined"),
    DISCOURSE_TOPIC_CREATED("discourse:topic:created"),
    DISCOURSE_POST_CREATED("discourse:post:created"),
    SLACK_MESSAGE_SENT("slack:message:sent"),
    NOTE_CREATED("note:created"),
    POST_CREATED("post:created"),
    ISSUES_OPENED("issues:opened"),
    ISSUE_COMMENT_CREATED("issue_comment:created"),
    PULL_REQUESTS_OPENED("pull_requests:opened"),
    PULL_REQUESTS_MERGED("pull_requests:merged"),
    CUSTOM_HAPPENED("custom:happened"),
    SLACK_CHANNEL_JOINED("slack:channel:joined"),
    STAR_CREATED("star:created");

    public final String value;

    private GetWorkspaceIdMembersActivityTypeEnum(String value) {
        this.value = value;
    }
}
