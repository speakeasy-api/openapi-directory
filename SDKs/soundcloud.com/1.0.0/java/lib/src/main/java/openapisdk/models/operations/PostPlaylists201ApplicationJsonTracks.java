package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostPlaylists201ApplicationJsonTracks
 * Soundcloud Track object.
**/
public class PostPlaylists201ApplicationJsonTracks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artwork_url")
    public String artworkUrl;
    public PostPlaylists201ApplicationJsonTracks withArtworkUrl(String artworkUrl) {
        this.artworkUrl = artworkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bpm")
    public Long bpm;
    public PostPlaylists201ApplicationJsonTracks withBpm(Long bpm) {
        this.bpm = bpm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment_count")
    public Long commentCount;
    public PostPlaylists201ApplicationJsonTracks withCommentCount(Long commentCount) {
        this.commentCount = commentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentable")
    public Boolean commentable;
    public PostPlaylists201ApplicationJsonTracks withCommentable(Boolean commentable) {
        this.commentable = commentable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public PostPlaylists201ApplicationJsonTracks withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostPlaylists201ApplicationJsonTracks withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_count")
    public Long downloadCount;
    public PostPlaylists201ApplicationJsonTracks withDownloadCount(Long downloadCount) {
        this.downloadCount = downloadCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadable")
    public String downloadable;
    public PostPlaylists201ApplicationJsonTracks withDownloadable(String downloadable) {
        this.downloadable = downloadable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public PostPlaylists201ApplicationJsonTracks withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embeddable_by")
    public String embeddableBy;
    public PostPlaylists201ApplicationJsonTracks withEmbeddableBy(String embeddableBy) {
        this.embeddableBy = embeddableBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favoritings_count")
    public Long favoritingsCount;
    public PostPlaylists201ApplicationJsonTracks withFavoritingsCount(Long favoritingsCount) {
        this.favoritingsCount = favoritingsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genre")
    public String genre;
    public PostPlaylists201ApplicationJsonTracks withGenre(String genre) {
        this.genre = genre;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PostPlaylists201ApplicationJsonTracks withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isrc")
    public String isrc;
    public PostPlaylists201ApplicationJsonTracks withIsrc(String isrc) {
        this.isrc = isrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key_signature")
    public String keySignature;
    public PostPlaylists201ApplicationJsonTracks withKeySignature(String keySignature) {
        this.keySignature = keySignature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PostPlaylists201ApplicationJsonTracks withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_name")
    public String labelName;
    public PostPlaylists201ApplicationJsonTracks withLabelName(String labelName) {
        this.labelName = labelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public String license;
    public PostPlaylists201ApplicationJsonTracks withLicense(String license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink_url")
    public String permalinkUrl;
    public PostPlaylists201ApplicationJsonTracks withPermalinkUrl(String permalinkUrl) {
        this.permalinkUrl = permalinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playback_count")
    public Long playbackCount;
    public PostPlaylists201ApplicationJsonTracks withPlaybackCount(Long playbackCount) {
        this.playbackCount = playbackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_title")
    public String purchaseTitle;
    public PostPlaylists201ApplicationJsonTracks withPurchaseTitle(String purchaseTitle) {
        this.purchaseTitle = purchaseTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_url")
    public String purchaseUrl;
    public PostPlaylists201ApplicationJsonTracks withPurchaseUrl(String purchaseUrl) {
        this.purchaseUrl = purchaseUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release")
    public String release;
    public PostPlaylists201ApplicationJsonTracks withRelease(String release) {
        this.release = release;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_day")
    public Long releaseDay;
    public PostPlaylists201ApplicationJsonTracks withReleaseDay(Long releaseDay) {
        this.releaseDay = releaseDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_month")
    public Long releaseMonth;
    public PostPlaylists201ApplicationJsonTracks withReleaseMonth(Long releaseMonth) {
        this.releaseMonth = releaseMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_year")
    public Long releaseYear;
    public PostPlaylists201ApplicationJsonTracks withReleaseYear(Long releaseYear) {
        this.releaseYear = releaseYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharing")
    public String sharing;
    public PostPlaylists201ApplicationJsonTracks withSharing(String sharing) {
        this.sharing = sharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream_url")
    public String streamUrl;
    public PostPlaylists201ApplicationJsonTracks withStreamUrl(String streamUrl) {
        this.streamUrl = streamUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamable")
    public Boolean streamable;
    public PostPlaylists201ApplicationJsonTracks withStreamable(Boolean streamable) {
        this.streamable = streamable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag_list")
    public String tagList;
    public PostPlaylists201ApplicationJsonTracks withTagList(String tagList) {
        this.tagList = tagList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PostPlaylists201ApplicationJsonTracks withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public PostPlaylists201ApplicationJsonTracks withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public openapisdk.models.shared.MetaUser user;
    public PostPlaylists201ApplicationJsonTracks withUser(openapisdk.models.shared.MetaUser user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_favorite")
    public Boolean userFavorite;
    public PostPlaylists201ApplicationJsonTracks withUserFavorite(Boolean userFavorite) {
        this.userFavorite = userFavorite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_playback_count")
    public Long userPlaybackCount;
    public PostPlaylists201ApplicationJsonTracks withUserPlaybackCount(Long userPlaybackCount) {
        this.userPlaybackCount = userPlaybackCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waveform_url")
    public String waveformUrl;
    public PostPlaylists201ApplicationJsonTracks withWaveformUrl(String waveformUrl) {
        this.waveformUrl = waveformUrl;
        return this;
    }
}