package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutPlaylistsPlaylistId200ApplicationJson
 * Soundcloud Playlist Object
**/
public class PutPlaylistsPlaylistId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artwork_url")
    public String artworkUrl;
    public PutPlaylistsPlaylistId200ApplicationJson withArtworkUrl(String artworkUrl) {
        this.artworkUrl = artworkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public PutPlaylistsPlaylistId200ApplicationJson withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PutPlaylistsPlaylistId200ApplicationJson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadable")
    public Boolean downloadable;
    public PutPlaylistsPlaylistId200ApplicationJson withDownloadable(Boolean downloadable) {
        this.downloadable = downloadable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public PutPlaylistsPlaylistId200ApplicationJson withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ean")
    public String ean;
    public PutPlaylistsPlaylistId200ApplicationJson withEan(String ean) {
        this.ean = ean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embeddable_by")
    public String embeddableBy;
    public PutPlaylistsPlaylistId200ApplicationJson withEmbeddableBy(String embeddableBy) {
        this.embeddableBy = embeddableBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre")
    public String genre;
    public PutPlaylistsPlaylistId200ApplicationJson withGenre(String genre) {
        this.genre = genre;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PutPlaylistsPlaylistId200ApplicationJson withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PutPlaylistsPlaylistId200ApplicationJson withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_id")
    public Long labelId;
    public PutPlaylistsPlaylistId200ApplicationJson withLabelId(Long labelId) {
        this.labelId = labelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_name")
    public String labelName;
    public PutPlaylistsPlaylistId200ApplicationJson withLabelName(String labelName) {
        this.labelName = labelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_modified")
    public String lastModified;
    public PutPlaylistsPlaylistId200ApplicationJson withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public String license;
    public PutPlaylistsPlaylistId200ApplicationJson withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink")
    public String permalink;
    public PutPlaylistsPlaylistId200ApplicationJson withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink_url")
    public String permalinkUrl;
    public PutPlaylistsPlaylistId200ApplicationJson withPermalinkUrl(String permalinkUrl) {
        this.permalinkUrl = permalinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlist_type")
    public String playlistType;
    public PutPlaylistsPlaylistId200ApplicationJson withPlaylistType(String playlistType) {
        this.playlistType = playlistType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_title")
    public String purchaseTitle;
    public PutPlaylistsPlaylistId200ApplicationJson withPurchaseTitle(String purchaseTitle) {
        this.purchaseTitle = purchaseTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_url")
    public String purchaseUrl;
    public PutPlaylistsPlaylistId200ApplicationJson withPurchaseUrl(String purchaseUrl) {
        this.purchaseUrl = purchaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release")
    public String release;
    public PutPlaylistsPlaylistId200ApplicationJson withRelease(String release) {
        this.release = release;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_day")
    public Long releaseDay;
    public PutPlaylistsPlaylistId200ApplicationJson withReleaseDay(Long releaseDay) {
        this.releaseDay = releaseDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_month")
    public Long releaseMonth;
    public PutPlaylistsPlaylistId200ApplicationJson withReleaseMonth(Long releaseMonth) {
        this.releaseMonth = releaseMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_year")
    public Long releaseYear;
    public PutPlaylistsPlaylistId200ApplicationJson withReleaseYear(Long releaseYear) {
        this.releaseYear = releaseYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharing")
    public String sharing;
    public PutPlaylistsPlaylistId200ApplicationJson withSharing(String sharing) {
        this.sharing = sharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamable")
    public Boolean streamable;
    public PutPlaylistsPlaylistId200ApplicationJson withStreamable(Boolean streamable) {
        this.streamable = streamable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag_list")
    public String tagList;
    public PutPlaylistsPlaylistId200ApplicationJson withTagList(String tagList) {
        this.tagList = tagList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PutPlaylistsPlaylistId200ApplicationJson withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track_count")
    public Long trackCount;
    public PutPlaylistsPlaylistId200ApplicationJson withTrackCount(Long trackCount) {
        this.trackCount = trackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracks")
    public PutPlaylistsPlaylistId200ApplicationJsonTracks[] tracks;
    public PutPlaylistsPlaylistId200ApplicationJson withTracks(PutPlaylistsPlaylistId200ApplicationJsonTracks[] tracks) {
        this.tracks = tracks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public PutPlaylistsPlaylistId200ApplicationJson withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public PutPlaylistsPlaylistId200ApplicationJson withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public openapisdk.models.shared.MetaUser user;
    public PutPlaylistsPlaylistId200ApplicationJson withUser(openapisdk.models.shared.MetaUser user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Long userId;
    public PutPlaylistsPlaylistId200ApplicationJson withUserId(Long userId) {
        this.userId = userId;
        return this;
    }
}