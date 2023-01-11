package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Playlist
 * Soundcloud Playlist Object
**/
public class Playlist {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artwork_url")
    public String artworkUrl;
    public Playlist withArtworkUrl(String artworkUrl) {
        this.artworkUrl = artworkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public Playlist withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Playlist withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadable")
    public Boolean downloadable;
    public Playlist withDownloadable(Boolean downloadable) {
        this.downloadable = downloadable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public Playlist withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ean")
    public String ean;
    public Playlist withEan(String ean) {
        this.ean = ean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embeddable_by")
    public String embeddableBy;
    public Playlist withEmbeddableBy(String embeddableBy) {
        this.embeddableBy = embeddableBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre")
    public String genre;
    public Playlist withGenre(String genre) {
        this.genre = genre;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Playlist withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Playlist withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public MetaUser label;
    public Playlist withLabel(MetaUser label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_id")
    public Long labelId;
    public Playlist withLabelId(Long labelId) {
        this.labelId = labelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_name")
    public String labelName;
    public Playlist withLabelName(String labelName) {
        this.labelName = labelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_modified")
    public String lastModified;
    public Playlist withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public String license;
    public Playlist withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likes_count")
    public Long likesCount;
    public Playlist withLikesCount(Long likesCount) {
        this.likesCount = likesCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink")
    public String permalink;
    public Playlist withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink_url")
    public String permalinkUrl;
    public Playlist withPermalinkUrl(String permalinkUrl) {
        this.permalinkUrl = permalinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlist_type")
    public String playlistType;
    public Playlist withPlaylistType(String playlistType) {
        this.playlistType = playlistType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_title")
    public String purchaseTitle;
    public Playlist withPurchaseTitle(String purchaseTitle) {
        this.purchaseTitle = purchaseTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_url")
    public String purchaseUrl;
    public Playlist withPurchaseUrl(String purchaseUrl) {
        this.purchaseUrl = purchaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release")
    public String release;
    public Playlist withRelease(String release) {
        this.release = release;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_day")
    public Long releaseDay;
    public Playlist withReleaseDay(Long releaseDay) {
        this.releaseDay = releaseDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_month")
    public Long releaseMonth;
    public Playlist withReleaseMonth(Long releaseMonth) {
        this.releaseMonth = releaseMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_year")
    public Long releaseYear;
    public Playlist withReleaseYear(Long releaseYear) {
        this.releaseYear = releaseYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharing")
    public String sharing;
    public Playlist withSharing(String sharing) {
        this.sharing = sharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamable")
    public Boolean streamable;
    public Playlist withStreamable(Boolean streamable) {
        this.streamable = streamable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag_list")
    public String tagList;
    public Playlist withTagList(String tagList) {
        this.tagList = tagList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String tags;
    public Playlist withTags(String tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Playlist withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track_count")
    public Long trackCount;
    public Playlist withTrackCount(Long trackCount) {
        this.trackCount = trackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracks")
    public Track[] tracks;
    public Playlist withTracks(Track[] tracks) {
        this.tracks = tracks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracks_uri")
    public String tracksUri;
    public Playlist withTracksUri(String tracksUri) {
        this.tracksUri = tracksUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Playlist withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Playlist withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public MetaUser user;
    public Playlist withUser(MetaUser user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Long userId;
    public Playlist withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}