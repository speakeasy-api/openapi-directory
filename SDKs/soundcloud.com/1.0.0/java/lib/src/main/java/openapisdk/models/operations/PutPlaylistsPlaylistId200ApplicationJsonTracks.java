package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutPlaylistsPlaylistId200ApplicationJsonTracks
 * Soundcloud Track object.
**/
public class PutPlaylistsPlaylistId200ApplicationJsonTracks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artwork_url")
    public String artworkUrl;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withArtworkUrl(String artworkUrl) {
        this.artworkUrl = artworkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bpm")
    public Long bpm;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withBpm(Long bpm) {
        this.bpm = bpm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment_count")
    public Long commentCount;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withCommentCount(Long commentCount) {
        this.commentCount = commentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentable")
    public Boolean commentable;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withCommentable(Boolean commentable) {
        this.commentable = commentable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_count")
    public Long downloadCount;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withDownloadCount(Long downloadCount) {
        this.downloadCount = downloadCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadable")
    public String downloadable;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withDownloadable(String downloadable) {
        this.downloadable = downloadable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embeddable_by")
    public String embeddableBy;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withEmbeddableBy(String embeddableBy) {
        this.embeddableBy = embeddableBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favoritings_count")
    public Long favoritingsCount;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withFavoritingsCount(Long favoritingsCount) {
        this.favoritingsCount = favoritingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre")
    public String genre;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withGenre(String genre) {
        this.genre = genre;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isrc")
    public String isrc;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withIsrc(String isrc) {
        this.isrc = isrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key_signature")
    public String keySignature;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withKeySignature(String keySignature) {
        this.keySignature = keySignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_name")
    public String labelName;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withLabelName(String labelName) {
        this.labelName = labelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public String license;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink_url")
    public String permalinkUrl;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withPermalinkUrl(String permalinkUrl) {
        this.permalinkUrl = permalinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playback_count")
    public Long playbackCount;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withPlaybackCount(Long playbackCount) {
        this.playbackCount = playbackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_title")
    public String purchaseTitle;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withPurchaseTitle(String purchaseTitle) {
        this.purchaseTitle = purchaseTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_url")
    public String purchaseUrl;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withPurchaseUrl(String purchaseUrl) {
        this.purchaseUrl = purchaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release")
    public String release;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withRelease(String release) {
        this.release = release;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_day")
    public Long releaseDay;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withReleaseDay(Long releaseDay) {
        this.releaseDay = releaseDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_month")
    public Long releaseMonth;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withReleaseMonth(Long releaseMonth) {
        this.releaseMonth = releaseMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_year")
    public Long releaseYear;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withReleaseYear(Long releaseYear) {
        this.releaseYear = releaseYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharing")
    public String sharing;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withSharing(String sharing) {
        this.sharing = sharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream_url")
    public String streamUrl;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withStreamUrl(String streamUrl) {
        this.streamUrl = streamUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamable")
    public Boolean streamable;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withStreamable(Boolean streamable) {
        this.streamable = streamable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag_list")
    public String tagList;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withTagList(String tagList) {
        this.tagList = tagList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public openapisdk.models.shared.MetaUser user;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withUser(openapisdk.models.shared.MetaUser user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_favorite")
    public Boolean userFavorite;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withUserFavorite(Boolean userFavorite) {
        this.userFavorite = userFavorite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_playback_count")
    public Long userPlaybackCount;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withUserPlaybackCount(Long userPlaybackCount) {
        this.userPlaybackCount = userPlaybackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waveform_url")
    public String waveformUrl;
    public PutPlaylistsPlaylistId200ApplicationJsonTracks withWaveformUrl(String waveformUrl) {
        this.waveformUrl = waveformUrl;
        return this;
    }
}