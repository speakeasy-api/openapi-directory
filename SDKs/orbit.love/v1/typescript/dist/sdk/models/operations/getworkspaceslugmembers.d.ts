import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugMembersSecurity extends SpeakeasyBase {
    bearer: string;
}
/**
 * Comma separated list of activity types
 */
export declare enum GetWorkspaceSlugMembersActivityTypeEnum {
    DiscourseTopicCreated = "discourse:topic:created",
    DiscoursePostLiked = "discourse:post:liked",
    DiscourseUserCreated = "discourse:user:created",
    DiscoursePostCreated = "discourse:post:created",
    SlackMessageSent = "slack:message:sent",
    SlackThreadReplied = "slack:thread:replied",
    SlackChannelJoined = "slack:channel:joined",
    NoteCreated = "note:created",
    PostCreated = "post:created",
    IssuesOpened = "issues:opened",
    DiscordMessageSent = "discord:message:sent",
    IssueCommentCreated = "issue_comment:created",
    DiscordThreadReplied = "discord:thread:replied",
    CustomHappened = "custom:happened",
    DevComment = "dev:comment",
    DiscordMessageReplied = "discord:message:replied",
    DiscordServerJoined = "discord:server:joined",
    InsidedConversationStarted = "insided:conversation:started",
    ForkCreated = "fork:created",
    InsidedIdeaReplied = "insided:idea:replied",
    InsidedArticleCreated = "insided:article:created",
    DiscussionsDiscussionCreated = "discussions:discussion_created",
    InsidedQuestionReplied = "insided:question:replied",
    DiscussionsComment = "discussions:comment",
    DiscussionsReply = "discussions:reply",
    InsidedArticleReplied = "insided:article:replied",
    InsidedQuestionAsked = "insided:question:asked",
    InsidedConversationReplied = "insided:conversation:replied",
    InsidedIdeaSubmitted = "insided:idea:submitted",
    RedditComment = "reddit:comment",
    RedditPost = "reddit:post",
    StackoverflowAnswer = "stackoverflow:answer",
    LinkedinComment = "linkedin:comment",
    PullRequestsOpened = "pull_requests:opened",
    PullRequestsMerged = "pull_requests:merged",
    StarCreated = "star:created",
    StackoverflowQuestion = "stackoverflow:question",
    TweetSent = "tweet:sent",
    TwitterFollowed = "twitter:followed",
    YoutubeComment = "youtube:comment"
}
export declare enum GetWorkspaceSlugMembersAffiliationEnum {
    Member = "member",
    Teammate = "teammate"
}
export declare enum GetWorkspaceSlugMembersDirectionEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare enum GetWorkspaceSlugMembersIdentityEnum {
    Github = "github",
    Twitter = "twitter",
    Email = "email",
    Discourse = "discourse",
    Linkedin = "linkedin",
    Devto = "devto",
    Slack = "slack",
    Discord = "discord"
}
export declare enum GetWorkspaceSlugMembersItemsEnum {
    Ten = "10",
    Fifty = "50",
    OneHundred = "100"
}
export declare enum GetWorkspaceSlugMembersSortEnum {
    ActivitiesCount = "activities_count",
    Company = "company",
    CreatedAt = "created_at",
    FirstActivity = "first_activity",
    GithubFollowers = "github_followers",
    Id = "id",
    LastActivity = "last_activity",
    Location = "location",
    Love = "love",
    Name = "name",
    Orbit = "orbit",
    Reach = "reach",
    Title = "title",
    TwitterFollowers = "twitter_followers",
    UpdatedAt = "updated_at"
}
export declare class GetWorkspaceSlugMembersRequest extends SpeakeasyBase {
    activitiesCountMax?: string;
    activitiesCountMin?: string;
    /**
     * Comma separated list of activity types
     */
    activityType?: GetWorkspaceSlugMembersActivityTypeEnum;
    affiliation?: GetWorkspaceSlugMembersAffiliationEnum;
    /**
     * Comma separated list of cities. The union (OR) of cities is applied.
     */
    cities?: string;
    /**
     * Comma separated list of companies. The union (OR) of companies is applied.
     */
    company?: string;
    /**
     * Comma separated list of countries. The union (OR) of countries is applied.
     */
    countries?: string;
    direction?: GetWorkspaceSlugMembersDirectionEnum;
    /**
     * Filter activities before this date. Format: YYYY-MM-DD.
     */
    endDate?: string;
    identity?: GetWorkspaceSlugMembersIdentityEnum;
    items?: GetWorkspaceSlugMembersItemsEnum;
    /**
     * The list of tags to filter against. Separate tags with `,` to do an intersection (AND), or with `|` to do a union (OR)
     */
    memberTags?: string;
    /**
     * The list of orbit levels to filter against. Accepted values are 1, 2, 3, 4, n. In the request, a format like `23` would include levels 2 and 3. `n` is for members with no orbit level.
     */
    orbit?: string;
    page?: string;
    query?: string;
    /**
     * Comma separated list of regions. The union (OR) of regions is applied.
     */
    regions?: string;
    /**
     * Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.
     */
    relative?: string;
    sort?: GetWorkspaceSlugMembersSortEnum;
    /**
     * Filter activities after this date. Format: YYYY-MM-DD.
     */
    startDate?: string;
    /**
     * Comma separated list of job titles. The union (OR) of job titles is applied.
     */
    title?: string;
    /**
     * Deprecated in favor of the activity_type parameter.
     */
    type?: string;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
