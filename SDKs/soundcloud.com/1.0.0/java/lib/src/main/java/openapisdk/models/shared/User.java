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
 * User
 * SoundCloud User object
**/
public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public User withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public User withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public User withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public User withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public User withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discogs_name")
    public String discogsName;
    public User withDiscogsName(String discogsName) {
        this.discogsName = discogsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public User withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers_count")
    public Long followersCount;
    public User withFollowersCount(Long followersCount) {
        this.followersCount = followersCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followings_count")
    public Long followingsCount;
    public User withFollowingsCount(Long followingsCount) {
        this.followingsCount = followingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full_name")
    public String fullName;
    public User withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public User withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public User withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_modified")
    public OffsetDateTime lastModified;
    public User withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public User withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("myspace_name")
    public String myspaceName;
    public User withMyspaceName(String myspaceName) {
        this.myspaceName = myspaceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink")
    public String permalink;
    public User withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink_url")
    public String permalinkUrl;
    public User withPermalinkUrl(String permalinkUrl) {
        this.permalinkUrl = permalinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public String plan;
    public User withPlan(String plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlist_count")
    public Long playlistCount;
    public User withPlaylistCount(Long playlistCount) {
        this.playlistCount = playlistCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_favorites_count")
    public Long publicFavoritesCount;
    public User withPublicFavoritesCount(Long publicFavoritesCount) {
        this.publicFavoritesCount = publicFavoritesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reposts_count")
    public Long repostsCount;
    public User withRepostsCount(Long repostsCount) {
        this.repostsCount = repostsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public Object subscriptions;
    public User withSubscriptions(Object subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track_count")
    public Long trackCount;
    public User withTrackCount(Long trackCount) {
        this.trackCount = trackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public User withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public User withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public User withWebsite(String website) {
        this.website = website;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website_title")
    public String websiteTitle;
    public User withWebsiteTitle(String websiteTitle) {
        this.websiteTitle = websiteTitle;
        return this;
    }
}