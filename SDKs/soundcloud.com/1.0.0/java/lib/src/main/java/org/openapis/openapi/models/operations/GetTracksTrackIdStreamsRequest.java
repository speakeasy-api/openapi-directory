/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetTracksTrackIdStreamsRequest {
    /**
     * A secret token to fetch private playlists/tracks
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=secret_token")
    public String secretToken;

    public GetTracksTrackIdStreamsRequest withSecretToken(String secretToken) {
        this.secretToken = secretToken;
        return this;
    }
    
    /**
     * SoundCloud Track id
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;

    public GetTracksTrackIdStreamsRequest withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
    
    public GetTracksTrackIdStreamsRequest(@JsonProperty("track_id") Long trackId) {
        this.trackId = trackId;
  }
}
