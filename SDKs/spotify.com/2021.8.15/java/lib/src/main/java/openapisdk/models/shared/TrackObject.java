package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrackObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-trackobject - Find more info on the official Spotify Web API Reference
**/
public class TrackObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("album")
    public SimplifiedAlbumObject album;
    public TrackObject withAlbum(SimplifiedAlbumObject album) {
        this.album = album;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public ArtistObject[] artists;
    public TrackObject withArtists(ArtistObject[] artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_markets")
    public String[] availableMarkets;
    public TrackObject withAvailableMarkets(String[] availableMarkets) {
        this.availableMarkets = availableMarkets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disc_number")
    public Integer discNumber;
    public TrackObject withDiscNumber(Integer discNumber) {
        this.discNumber = discNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_ms")
    public Integer durationMs;
    public TrackObject withDurationMs(Integer durationMs) {
        this.durationMs = durationMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit")
    public Boolean explicit;
    public TrackObject withExplicit(Boolean explicit) {
        this.explicit = explicit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_ids")
    public ExternalIdObject externalIds;
    public TrackObject withExternalIds(ExternalIdObject externalIds) {
        this.externalIds = externalIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_urls")
    public ExternalUrlObject externalUrls;
    public TrackObject withExternalUrls(ExternalUrlObject externalUrls) {
        this.externalUrls = externalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public TrackObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public TrackObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_local")
    public Boolean isLocal;
    public TrackObject withIsLocal(Boolean isLocal) {
        this.isLocal = isLocal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_playable")
    public Boolean isPlayable;
    public TrackObject withIsPlayable(Boolean isPlayable) {
        this.isPlayable = isPlayable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linked_from")
    public LinkedTrackObject linkedFrom;
    public TrackObject withLinkedFrom(LinkedTrackObject linkedFrom) {
        this.linkedFrom = linkedFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TrackObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("popularity")
    public Integer popularity;
    public TrackObject withPopularity(Integer popularity) {
        this.popularity = popularity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_url")
    public String previewUrl;
    public TrackObject withPreviewUrl(String previewUrl) {
        this.previewUrl = previewUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictions")
    public TrackRestrictionObject restrictions;
    public TrackObject withRestrictions(TrackRestrictionObject restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track_number")
    public Integer trackNumber;
    public TrackObject withTrackNumber(Integer trackNumber) {
        this.trackNumber = trackNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public TrackObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public TrackObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
}