package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimplifiedAlbumObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedalbumobject - Find more info on the official Spotify Web API Reference
**/
public class SimplifiedAlbumObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("album_group")
    public String albumGroup;
    public SimplifiedAlbumObject withAlbumGroup(String albumGroup) {
        this.albumGroup = albumGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("album_type")
    public String albumType;
    public SimplifiedAlbumObject withAlbumType(String albumType) {
        this.albumType = albumType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public SimplifiedArtistObject[] artists;
    public SimplifiedAlbumObject withArtists(SimplifiedArtistObject[] artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_markets")
    public String[] availableMarkets;
    public SimplifiedAlbumObject withAvailableMarkets(String[] availableMarkets) {
        this.availableMarkets = availableMarkets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_urls")
    public ExternalUrlObject externalUrls;
    public SimplifiedAlbumObject withExternalUrls(ExternalUrlObject externalUrls) {
        this.externalUrls = externalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public SimplifiedAlbumObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SimplifiedAlbumObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageObject[] images;
    public SimplifiedAlbumObject withImages(ImageObject[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SimplifiedAlbumObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_date")
    public String releaseDate;
    public SimplifiedAlbumObject withReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_date_precision")
    public String releaseDatePrecision;
    public SimplifiedAlbumObject withReleaseDatePrecision(String releaseDatePrecision) {
        this.releaseDatePrecision = releaseDatePrecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictions")
    public AlbumRestrictionObject restrictions;
    public SimplifiedAlbumObject withRestrictions(AlbumRestrictionObject restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tracks")
    public Integer totalTracks;
    public SimplifiedAlbumObject withTotalTracks(Integer totalTracks) {
        this.totalTracks = totalTracks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SimplifiedAlbumObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public SimplifiedAlbumObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
}