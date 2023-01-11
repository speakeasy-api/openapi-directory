package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompleteUser
 * SoundCloud Complete User object
**/
public class CompleteUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar_url")
    public String avatarUrl;
    public CompleteUser withAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public CompleteUser withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public CompleteUser withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CompleteUser withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discogs_name")
    public String discogsName;
    public CompleteUser withDiscogsName(String discogsName) {
        this.discogsName = discogsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public CompleteUser withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followers_count")
    public Long followersCount;
    public CompleteUser withFollowersCount(Long followersCount) {
        this.followersCount = followersCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followings_count")
    public Long followingsCount;
    public CompleteUser withFollowingsCount(Long followingsCount) {
        this.followingsCount = followingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("full_name")
    public String fullName;
    public CompleteUser withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CompleteUser withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CompleteUser withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_modified")
    public String lastModified;
    public CompleteUser withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public CompleteUser withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public CompleteUser withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("myspace_name")
    public String myspaceName;
    public CompleteUser withMyspaceName(String myspaceName) {
        this.myspaceName = myspaceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink")
    public String permalink;
    public CompleteUser withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink_url")
    public String permalinkUrl;
    public CompleteUser withPermalinkUrl(String permalinkUrl) {
        this.permalinkUrl = permalinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public String plan;
    public CompleteUser withPlan(String plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlist_count")
    public Long playlistCount;
    public CompleteUser withPlaylistCount(Long playlistCount) {
        this.playlistCount = playlistCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_email_confirmed")
    public Boolean primaryEmailConfirmed;
    public CompleteUser withPrimaryEmailConfirmed(Boolean primaryEmailConfirmed) {
        this.primaryEmailConfirmed = primaryEmailConfirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_playlists_count")
    public Long privatePlaylistsCount;
    public CompleteUser withPrivatePlaylistsCount(Long privatePlaylistsCount) {
        this.privatePlaylistsCount = privatePlaylistsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_tracks_count")
    public Long privateTracksCount;
    public CompleteUser withPrivateTracksCount(Long privateTracksCount) {
        this.privateTracksCount = privateTracksCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_favorites_count")
    public Long publicFavoritesCount;
    public CompleteUser withPublicFavoritesCount(Long publicFavoritesCount) {
        this.publicFavoritesCount = publicFavoritesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quota")
    public CompleteUserQuota quota;
    public CompleteUser withQuota(CompleteUserQuota quota) {
        this.quota = quota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reposts_count")
    public Long repostsCount;
    public CompleteUser withRepostsCount(Long repostsCount) {
        this.repostsCount = repostsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public Object subscriptions;
    public CompleteUser withSubscriptions(Object subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track_count")
    public Long trackCount;
    public CompleteUser withTrackCount(Long trackCount) {
        this.trackCount = trackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public CompleteUser withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public CompleteUser withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public CompleteUser withWebsite(String website) {
        this.website = website;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website_title")
    public String websiteTitle;
    public CompleteUser withWebsiteTitle(String websiteTitle) {
        this.websiteTitle = websiteTitle;
        return this;
    }
}