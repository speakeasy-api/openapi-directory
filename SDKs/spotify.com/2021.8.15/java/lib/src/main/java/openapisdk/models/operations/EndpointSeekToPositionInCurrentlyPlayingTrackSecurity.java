package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSeekToPositionInCurrentlyPlayingTrackSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeSpotifyAuth spotifyAuth;
    public EndpointSeekToPositionInCurrentlyPlayingTrackSecurity withSpotifyAuth(openapisdk.models.shared.SchemeSpotifyAuth spotifyAuth) {
        this.spotifyAuth = spotifyAuth;
        return this;
    }
}