package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimplifiedTrackObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedtrackobject - Find more info on the official Spotify Web API Reference
**/
public class SimplifiedTrackObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public SimplifiedArtistObject[] artists;
    public SimplifiedTrackObject withArtists(SimplifiedArtistObject[] artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_markets")
    public String[] availableMarkets;
    public SimplifiedTrackObject withAvailableMarkets(String[] availableMarkets) {
        this.availableMarkets = availableMarkets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disc_number")
    public Integer discNumber;
    public SimplifiedTrackObject withDiscNumber(Integer discNumber) {
        this.discNumber = discNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration_ms")
    public Integer durationMs;
    public SimplifiedTrackObject withDurationMs(Integer durationMs) {
        this.durationMs = durationMs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit")
    public Boolean explicit;
    public SimplifiedTrackObject withExplicit(Boolean explicit) {
        this.explicit = explicit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_urls")
    public ExternalUrlObject externalUrls;
    public SimplifiedTrackObject withExternalUrls(ExternalUrlObject externalUrls) {
        this.externalUrls = externalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public SimplifiedTrackObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SimplifiedTrackObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_local")
    public Boolean isLocal;
    public SimplifiedTrackObject withIsLocal(Boolean isLocal) {
        this.isLocal = isLocal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_playable")
    public Boolean isPlayable;
    public SimplifiedTrackObject withIsPlayable(Boolean isPlayable) {
        this.isPlayable = isPlayable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linked_from")
    public LinkedTrackObject linkedFrom;
    public SimplifiedTrackObject withLinkedFrom(LinkedTrackObject linkedFrom) {
        this.linkedFrom = linkedFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SimplifiedTrackObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_url")
    public String previewUrl;
    public SimplifiedTrackObject withPreviewUrl(String previewUrl) {
        this.previewUrl = previewUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictions")
    public TrackRestrictionObject restrictions;
    public SimplifiedTrackObject withRestrictions(TrackRestrictionObject restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("track_number")
    public Integer trackNumber;
    public SimplifiedTrackObject withTrackNumber(Integer trackNumber) {
        this.trackNumber = trackNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SimplifiedTrackObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public SimplifiedTrackObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
}