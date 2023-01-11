package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * PrivateUser
 * Private User
**/
public class PrivateUser {
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public PrivateUser withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonProperty("bio")
    public String bio;
    public PrivateUser withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonProperty("blog")
    public String blog;
    public PrivateUser withBlog(String blog) {
        this.blog = blog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_plus")
    public Boolean businessPlus;
    public PrivateUser withBusinessPlus(Boolean businessPlus) {
        this.businessPlus = businessPlus;
        return this;
    }
    @JsonProperty("collaborators")
    public Long collaborators;
    public PrivateUser withCollaborators(Long collaborators) {
        this.collaborators = collaborators;
        return this;
    }
    @JsonProperty("company")
    public String company;
    public PrivateUser withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public PrivateUser withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("disk_usage")
    public Long diskUsage;
    public PrivateUser withDiskUsage(Long diskUsage) {
        this.diskUsage = diskUsage;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public PrivateUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("events_url")
    public String eventsUrl;
    public PrivateUser withEventsUrl(String eventsUrl) {
        this.eventsUrl = eventsUrl;
        return this;
    }
    @JsonProperty("followers")
    public Long followers;
    public PrivateUser withFollowers(Long followers) {
        this.followers = followers;
        return this;
    }
    @JsonProperty("followers_url")
    public String followersUrl;
    public PrivateUser withFollowersUrl(String followersUrl) {
        this.followersUrl = followersUrl;
        return this;
    }
    @JsonProperty("following")
    public Long following;
    public PrivateUser withFollowing(Long following) {
        this.following = following;
        return this;
    }
    @JsonProperty("following_url")
    public String followingUrl;
    public PrivateUser withFollowingUrl(String followingUrl) {
        this.followingUrl = followingUrl;
        return this;
    }
    @JsonProperty("gists_url")
    public String gistsUrl;
    public PrivateUser withGistsUrl(String gistsUrl) {
        this.gistsUrl = gistsUrl;
        return this;
    }
    @JsonProperty("gravatar_id")
    public String gravatarId;
    public PrivateUser withGravatarId(String gravatarId) {
        this.gravatarId = gravatarId;
        return this;
    }
    @JsonProperty("hireable")
    public Boolean hireable;
    public PrivateUser withHireable(Boolean hireable) {
        this.hireable = hireable;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public PrivateUser withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PrivateUser withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_dn")
    public String ldapDn;
    public PrivateUser withLdapDn(String ldapDn) {
        this.ldapDn = ldapDn;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public PrivateUser withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("login")
    public String login;
    public PrivateUser withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PrivateUser withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public PrivateUser withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("organizations_url")
    public String organizationsUrl;
    public PrivateUser withOrganizationsUrl(String organizationsUrl) {
        this.organizationsUrl = organizationsUrl;
        return this;
    }
    @JsonProperty("owned_private_repos")
    public Long ownedPrivateRepos;
    public PrivateUser withOwnedPrivateRepos(Long ownedPrivateRepos) {
        this.ownedPrivateRepos = ownedPrivateRepos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public PrivateUserPlan plan;
    public PrivateUser withPlan(PrivateUserPlan plan) {
        this.plan = plan;
        return this;
    }
    @JsonProperty("private_gists")
    public Long privateGists;
    public PrivateUser withPrivateGists(Long privateGists) {
        this.privateGists = privateGists;
        return this;
    }
    @JsonProperty("public_gists")
    public Long publicGists;
    public PrivateUser withPublicGists(Long publicGists) {
        this.publicGists = publicGists;
        return this;
    }
    @JsonProperty("public_repos")
    public Long publicRepos;
    public PrivateUser withPublicRepos(Long publicRepos) {
        this.publicRepos = publicRepos;
        return this;
    }
    @JsonProperty("received_events_url")
    public String receivedEventsUrl;
    public PrivateUser withReceivedEventsUrl(String receivedEventsUrl) {
        this.receivedEventsUrl = receivedEventsUrl;
        return this;
    }
    @JsonProperty("repos_url")
    public String reposUrl;
    public PrivateUser withReposUrl(String reposUrl) {
        this.reposUrl = reposUrl;
        return this;
    }
    @JsonProperty("site_admin")
    public Boolean siteAdmin;
    public PrivateUser withSiteAdmin(Boolean siteAdmin) {
        this.siteAdmin = siteAdmin;
        return this;
    }
    @JsonProperty("starred_url")
    public String starredUrl;
    public PrivateUser withStarredUrl(String starredUrl) {
        this.starredUrl = starredUrl;
        return this;
    }
    @JsonProperty("subscriptions_url")
    public String subscriptionsUrl;
    public PrivateUser withSubscriptionsUrl(String subscriptionsUrl) {
        this.subscriptionsUrl = subscriptionsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("suspended_at")
    public OffsetDateTime suspendedAt;
    public PrivateUser withSuspendedAt(OffsetDateTime suspendedAt) {
        this.suspendedAt = suspendedAt;
        return this;
    }
    @JsonProperty("total_private_repos")
    public Long totalPrivateRepos;
    public PrivateUser withTotalPrivateRepos(Long totalPrivateRepos) {
        this.totalPrivateRepos = totalPrivateRepos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twitter_username")
    public String twitterUsername;
    public PrivateUser withTwitterUsername(String twitterUsername) {
        this.twitterUsername = twitterUsername;
        return this;
    }
    @JsonProperty("two_factor_authentication")
    public Boolean twoFactorAuthentication;
    public PrivateUser withTwoFactorAuthentication(Boolean twoFactorAuthentication) {
        this.twoFactorAuthentication = twoFactorAuthentication;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PrivateUser withType(String type) {
        this.type = type;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public PrivateUser withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PrivateUser withUrl(String url) {
        this.url = url;
        return this;
    }
}