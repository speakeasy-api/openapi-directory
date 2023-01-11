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
 * UsersList
 * SoundCloud User object
**/
public class UsersList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public UsersList withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public UsersList withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public UsersList withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UsersList withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discogs_name")
    public String discogsName;
    public UsersList withDiscogsName(String discogsName) {
        this.discogsName = discogsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public UsersList withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers_count")
    public Long followersCount;
    public UsersList withFollowersCount(Long followersCount) {
        this.followersCount = followersCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followings_count")
    public Long followingsCount;
    public UsersList withFollowingsCount(Long followingsCount) {
        this.followingsCount = followingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full_name")
    public String fullName;
    public UsersList withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public UsersList withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UsersList withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_modified")
    public OffsetDateTime lastModified;
    public UsersList withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public UsersList withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("myspace_name")
    public String myspaceName;
    public UsersList withMyspaceName(String myspaceName) {
        this.myspaceName = myspaceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink")
    public String permalink;
    public UsersList withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink_url")
    public String permalinkUrl;
    public UsersList withPermalinkUrl(String permalinkUrl) {
        this.permalinkUrl = permalinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public String plan;
    public UsersList withPlan(String plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlist_count")
    public Long playlistCount;
    public UsersList withPlaylistCount(Long playlistCount) {
        this.playlistCount = playlistCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_favorites_count")
    public Long publicFavoritesCount;
    public UsersList withPublicFavoritesCount(Long publicFavoritesCount) {
        this.publicFavoritesCount = publicFavoritesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reposts_count")
    public Long repostsCount;
    public UsersList withRepostsCount(Long repostsCount) {
        this.repostsCount = repostsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public Object subscriptions;
    public UsersList withSubscriptions(Object subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track_count")
    public Long trackCount;
    public UsersList withTrackCount(Long trackCount) {
        this.trackCount = trackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public UsersList withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UsersList withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public UsersList withWebsite(String website) {
        this.website = website;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website_title")
    public String websiteTitle;
    public UsersList withWebsiteTitle(String websiteTitle) {
        this.websiteTitle = websiteTitle;
        return this;
    }
}