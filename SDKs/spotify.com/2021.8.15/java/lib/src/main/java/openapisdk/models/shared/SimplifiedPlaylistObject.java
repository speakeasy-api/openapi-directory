package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimplifiedPlaylistObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedplaylistobject - Find more info on the official Spotify Web API Reference
**/
public class SimplifiedPlaylistObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collaborative")
    public Boolean collaborative;
    public SimplifiedPlaylistObject withCollaborative(Boolean collaborative) {
        this.collaborative = collaborative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SimplifiedPlaylistObject withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_urls")
    public ExternalUrlObject externalUrls;
    public SimplifiedPlaylistObject withExternalUrls(ExternalUrlObject externalUrls) {
        this.externalUrls = externalUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public SimplifiedPlaylistObject withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SimplifiedPlaylistObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public ImageObject[] images;
    public SimplifiedPlaylistObject withImages(ImageObject[] images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SimplifiedPlaylistObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public PublicUserObject owner;
    public SimplifiedPlaylistObject withOwner(PublicUserObject owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public")
    public Boolean public_;
    public SimplifiedPlaylistObject withPublic(Boolean public_) {
        this.public_ = public_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshot_id")
    public String snapshotId;
    public SimplifiedPlaylistObject withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracks")
    public PlaylistTracksRefObject tracks;
    public SimplifiedPlaylistObject withTracks(PlaylistTracksRefObject tracks) {
        this.tracks = tracks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public SimplifiedPlaylistObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public SimplifiedPlaylistObject withUri(String uri) {
        this.uri = uri;
        return this;
    }
}