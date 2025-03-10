/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Playlist - A *playlist* resource represents a YouTube playlist. A playlist is a collection of videos that can be viewed sequentially and shared with other users. A playlist can contain up to 200 videos, and YouTube does not limit the number of playlists that each user creates. By default, playlists are publicly visible to other users, but playlists can be public or private. YouTube also uses playlists to identify special collections of videos for a channel, such as: - uploaded videos - favorite videos - positively rated (liked) videos - watch history - watch later To be more specific, these lists are associated with a channel, which is a collection of a person, group, or company's videos, playlists, and other YouTube information. You can retrieve the playlist IDs for each of these lists from the channel resource for a given channel. You can then use the playlistItems.list method to retrieve any of those lists. You can also add or remove items from those lists by calling the playlistItems.insert and playlistItems.delete methods.
 */
public class Playlist {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDetails")
    public PlaylistContentDetails contentDetails;

    public Playlist withContentDetails(PlaylistContentDetails contentDetails) {
        this.contentDetails = contentDetails;
        return this;
    }
    
    /**
     * Etag of this resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;

    public Playlist withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    
    /**
     * The ID that YouTube uses to uniquely identify the playlist.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Playlist withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#playlist".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public Playlist withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * Localizations for different languages
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizations")
    public java.util.Map<String, PlaylistLocalization> localizations;

    public Playlist withLocalizations(java.util.Map<String, PlaylistLocalization> localizations) {
        this.localizations = localizations;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("player")
    public PlaylistPlayer player;

    public Playlist withPlayer(PlaylistPlayer player) {
        this.player = player;
        return this;
    }
    
    /**
     * Basic details about a playlist, including title, description and thumbnails.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public PlaylistSnippet snippet;

    public Playlist withSnippet(PlaylistSnippet snippet) {
        this.snippet = snippet;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PlaylistStatus status;

    public Playlist withStatus(PlaylistStatus status) {
        this.status = status;
        return this;
    }
    
    public Playlist(){}
}
