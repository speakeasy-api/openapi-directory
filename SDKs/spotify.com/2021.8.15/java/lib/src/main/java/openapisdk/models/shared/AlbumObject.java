package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlbumObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-albumobject - Find more info on the official Spotify Web API Reference
**/
public class AlbumObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("album_type")
    public String albumType;
    public AlbumObject withAlbumType(String albumType) {
        this.albumType = albumType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public ArtistObject[] artists;
    public AlbumObject withArtists(ArtistObject[] artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available_markets")
    public String[] availableMarkets;
    public AlbumObject withAvailableMarkets(String[] availableMarkets) {
        this.availableMarkets = availableMarkets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyrights")
    public CopyrightObject[] copyrights;
    public AlbumObject withCopyrights(CopyrightObject[] copyrights) {
        this.copyrights = copyrights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_ids")
    public ExternalIdObject externalIds;
    public AlbumObject withExternalIds(ExternalIdObject externalIds) {
        this.externalIds = externalIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_urls")
    public ExternalUrlObject externalUrls;
    public AlbumObject withExternalUrls(ExternalUrlObject externalUrls) {
        this.externalUrls = externalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genres")
    public String[] genres;
    public AlbumObject withGenres(String[] genres) {
        this.genres = genres;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public AlbumObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AlbumObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageObject[] images;
    public AlbumObject withImages(ImageObject[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public AlbumObject withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AlbumObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("popularity")
    public Integer popularity;
    public AlbumObject withPopularity(Integer popularity) {
        this.popularity = popularity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_date")
    public String releaseDate;
    public AlbumObject withReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_date_precision")
    public String releaseDatePrecision;
    public AlbumObject withReleaseDatePrecision(String releaseDatePrecision) {
        this.releaseDatePrecision = releaseDatePrecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictions")
    public AlbumRestrictionObject restrictions;
    public AlbumObject withRestrictions(AlbumRestrictionObject restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tracks")
    public Integer totalTracks;
    public AlbumObject withTotalTracks(Integer totalTracks) {
        this.totalTracks = totalTracks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracks")
    public AlbumObjectTracks tracks;
    public AlbumObject withTracks(AlbumObjectTracks tracks) {
        this.tracks = tracks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AlbumObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public AlbumObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
}