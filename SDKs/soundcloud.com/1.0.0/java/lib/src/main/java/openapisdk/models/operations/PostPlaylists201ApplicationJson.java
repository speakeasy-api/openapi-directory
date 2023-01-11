package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostPlaylists201ApplicationJson
 * Soundcloud Playlist Object
**/
public class PostPlaylists201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artwork_url")
    public String artworkUrl;
    public PostPlaylists201ApplicationJson withArtworkUrl(String artworkUrl) {
        this.artworkUrl = artworkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public PostPlaylists201ApplicationJson withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostPlaylists201ApplicationJson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadable")
    public Boolean downloadable;
    public PostPlaylists201ApplicationJson withDownloadable(Boolean downloadable) {
        this.downloadable = downloadable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public PostPlaylists201ApplicationJson withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ean")
    public String ean;
    public PostPlaylists201ApplicationJson withEan(String ean) {
        this.ean = ean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embeddable_by")
    public String embeddableBy;
    public PostPlaylists201ApplicationJson withEmbeddableBy(String embeddableBy) {
        this.embeddableBy = embeddableBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre")
    public String genre;
    public PostPlaylists201ApplicationJson withGenre(String genre) {
        this.genre = genre;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PostPlaylists201ApplicationJson withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PostPlaylists201ApplicationJson withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_id")
    public Long labelId;
    public PostPlaylists201ApplicationJson withLabelId(Long labelId) {
        this.labelId = labelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_name")
    public String labelName;
    public PostPlaylists201ApplicationJson withLabelName(String labelName) {
        this.labelName = labelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_modified")
    public String lastModified;
    public PostPlaylists201ApplicationJson withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public String license;
    public PostPlaylists201ApplicationJson withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink")
    public String permalink;
    public PostPlaylists201ApplicationJson withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink_url")
    public String permalinkUrl;
    public PostPlaylists201ApplicationJson withPermalinkUrl(String permalinkUrl) {
        this.permalinkUrl = permalinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlist_type")
    public String playlistType;
    public PostPlaylists201ApplicationJson withPlaylistType(String playlistType) {
        this.playlistType = playlistType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_title")
    public String purchaseTitle;
    public PostPlaylists201ApplicationJson withPurchaseTitle(String purchaseTitle) {
        this.purchaseTitle = purchaseTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_url")
    public String purchaseUrl;
    public PostPlaylists201ApplicationJson withPurchaseUrl(String purchaseUrl) {
        this.purchaseUrl = purchaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release")
    public String release;
    public PostPlaylists201ApplicationJson withRelease(String release) {
        this.release = release;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_day")
    public Long releaseDay;
    public PostPlaylists201ApplicationJson withReleaseDay(Long releaseDay) {
        this.releaseDay = releaseDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_month")
    public Long releaseMonth;
    public PostPlaylists201ApplicationJson withReleaseMonth(Long releaseMonth) {
        this.releaseMonth = releaseMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_year")
    public Long releaseYear;
    public PostPlaylists201ApplicationJson withReleaseYear(Long releaseYear) {
        this.releaseYear = releaseYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharing")
    public String sharing;
    public PostPlaylists201ApplicationJson withSharing(String sharing) {
        this.sharing = sharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamable")
    public Boolean streamable;
    public PostPlaylists201ApplicationJson withStreamable(Boolean streamable) {
        this.streamable = streamable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag_list")
    public String tagList;
    public PostPlaylists201ApplicationJson withTagList(String tagList) {
        this.tagList = tagList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PostPlaylists201ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track_count")
    public Long trackCount;
    public PostPlaylists201ApplicationJson withTrackCount(Long trackCount) {
        this.trackCount = trackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracks")
    public PostPlaylists201ApplicationJsonTracks[] tracks;
    public PostPlaylists201ApplicationJson withTracks(PostPlaylists201ApplicationJsonTracks[] tracks) {
        this.tracks = tracks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PostPlaylists201ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public PostPlaylists201ApplicationJson withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public openapisdk.models.shared.MetaUser user;
    public PostPlaylists201ApplicationJson withUser(openapisdk.models.shared.MetaUser user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Long userId;
    public PostPlaylists201ApplicationJson withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}