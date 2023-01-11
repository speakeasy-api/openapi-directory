package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PullRequestSimpleHeadSimpleUser
 * Simple User
**/
public class PullRequestSimpleHeadSimpleUser {
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public PullRequestSimpleHeadSimpleUser withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonProperty("events_url")
    public String eventsUrl;
    public PullRequestSimpleHeadSimpleUser withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonProperty("followers_url")
    public String followersUrl;
    public PullRequestSimpleHeadSimpleUser withFollowersUrl(String followersUrl) {
        this.followersUrl = followersUrl;
        return this;
    }
    @JsonProperty("following_url")
    public String followingUrl;
    public PullRequestSimpleHeadSimpleUser withFollowingUrl(String followingUrl) {
        this.followingUrl = followingUrl;
        return this;
    }
    @JsonProperty("gists_url")
    public String gistsUrl;
    public PullRequestSimpleHeadSimpleUser withGistsUrl(String gistsUrl) {
        this.gistsUrl = gistsUrl;
        return this;
    }
    @JsonProperty("gravatar_id")
    public String gravatarId;
    public PullRequestSimpleHeadSimpleUser withGravatarId(String gravatarId) {
        this.gravatarId = gravatarId;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public PullRequestSimpleHeadSimpleUser withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PullRequestSimpleHeadSimpleUser withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("login")
    public String login;
    public PullRequestSimpleHeadSimpleUser withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public PullRequestSimpleHeadSimpleUser withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("organizations_url")
    public String organizationsUrl;
    public PullRequestSimpleHeadSimpleUser withOrganizationsUrl(String organizationsUrl) {
        this.organizationsUrl = organizationsUrl;
        return this;
    }
    @JsonProperty("received_events_url")
    public String receivedEventsUrl;
    public PullRequestSimpleHeadSimpleUser withReceivedEventsUrl(String receivedEventsUrl) {
        this.receivedEventsUrl = receivedEventsUrl;
        return this;
    }
    @JsonProperty("repos_url")
    public String reposUrl;
    public PullRequestSimpleHeadSimpleUser withReposUrl(String reposUrl) {
        this.reposUrl = reposUrl;
        return this;
    }
    @JsonProperty("site_admin")
    public Boolean siteAdmin;
    public PullRequestSimpleHeadSimpleUser withSiteAdmin(Boolean siteAdmin) {
        this.siteAdmin = siteAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("starred_at")
    public String starredAt;
    public PullRequestSimpleHeadSimpleUser withStarredAt(String starredAt) {
        this.starredAt = starredAt;
        return this;
    }
    @JsonProperty("starred_url")
    public String starredUrl;
    public PullRequestSimpleHeadSimpleUser withStarredUrl(String starredUrl) {
        this.starredUrl = starredUrl;
        return this;
    }
    @JsonProperty("subscriptions_url")
    public String subscriptionsUrl;
    public PullRequestSimpleHeadSimpleUser withSubscriptionsUrl(String subscriptionsUrl) {
        this.subscriptionsUrl = subscriptionsUrl;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PullRequestSimpleHeadSimpleUser withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PullRequestSimpleHeadSimpleUser withUrl(String url) {
        this.url = url;
        return this;
    }
}