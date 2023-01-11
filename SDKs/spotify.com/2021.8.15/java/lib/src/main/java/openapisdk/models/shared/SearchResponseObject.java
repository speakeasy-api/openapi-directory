package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchResponseObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("albums")
    public SearchResponseObjectAlbums albums;
    public SearchResponseObject withAlbums(SearchResponseObjectAlbums albums) {
        this.albums = albums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artists")
    public SearchResponseObjectArtists artists;
    public SearchResponseObject withArtists(SearchResponseObjectArtists artists) {
        this.artists = artists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episodes")
    public SearchResponseObjectEpisodes episodes;
    public SearchResponseObject withEpisodes(SearchResponseObjectEpisodes episodes) {
        this.episodes = episodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playlists")
    public SearchResponseObjectPlaylists playlists;
    public SearchResponseObject withPlaylists(SearchResponseObjectPlaylists playlists) {
        this.playlists = playlists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shows")
    public SearchResponseObjectShows shows;
    public SearchResponseObject withShows(SearchResponseObjectShows shows) {
        this.shows = shows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracks")
    public SearchResponseObjectTracks tracks;
    public SearchResponseObject withTracks(SearchResponseObjectTracks tracks) {
        this.tracks = tracks;
        return this;
    }
}