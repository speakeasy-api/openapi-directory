package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestHeadRepoOwner {
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public PullRequestHeadRepoOwner withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonProperty("events_url")
    public String eventsUrl;
    public PullRequestHeadRepoOwner withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonProperty("followers_url")
    public String followersUrl;
    public PullRequestHeadRepoOwner withFollowersUrl(String followersUrl) {
        this.followersUrl = followersUrl;
        return this;
    }
    @JsonProperty("following_url")
    public String followingUrl;
    public PullRequestHeadRepoOwner withFollowingUrl(String followingUrl) {
        this.followingUrl = followingUrl;
        return this;
    }
    @JsonProperty("gists_url")
    public String gistsUrl;
    public PullRequestHeadRepoOwner withGistsUrl(String gistsUrl) {
        this.gistsUrl = gistsUrl;
        return this;
    }
    @JsonProperty("gravatar_id")
    public String gravatarId;
    public PullRequestHeadRepoOwner withGravatarId(String gravatarId) {
        this.gravatarId = gravatarId;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public PullRequestHeadRepoOwner withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PullRequestHeadRepoOwner withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("login")
    public String login;
    public PullRequestHeadRepoOwner withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public PullRequestHeadRepoOwner withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("organizations_url")
    public String organizationsUrl;
    public PullRequestHeadRepoOwner withOrganizationsUrl(String organizationsUrl) {
        this.organizationsUrl = organizationsUrl;
        return this;
    }
    @JsonProperty("received_events_url")
    public String receivedEventsUrl;
    public PullRequestHeadRepoOwner withReceivedEventsUrl(String receivedEventsUrl) {
        this.receivedEventsUrl = receivedEventsUrl;
        return this;
    }
    @JsonProperty("repos_url")
    public String reposUrl;
    public PullRequestHeadRepoOwner withReposUrl(String reposUrl) {
        this.reposUrl = reposUrl;
        return this;
    }
    @JsonProperty("site_admin")
    public Boolean siteAdmin;
    public PullRequestHeadRepoOwner withSiteAdmin(Boolean siteAdmin) {
        this.siteAdmin = siteAdmin;
        return this;
    }
    @JsonProperty("starred_url")
    public String starredUrl;
    public PullRequestHeadRepoOwner withStarredUrl(String starredUrl) {
        this.starredUrl = starredUrl;
        return this;
    }
    @JsonProperty("subscriptions_url")
    public String subscriptionsUrl;
    public PullRequestHeadRepoOwner withSubscriptionsUrl(String subscriptionsUrl) {
        this.subscriptionsUrl = subscriptionsUrl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PullRequestHeadRepoOwner withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PullRequestHeadRepoOwner withUrl(String url) {
        this.url = url;
        return this;
    }
}