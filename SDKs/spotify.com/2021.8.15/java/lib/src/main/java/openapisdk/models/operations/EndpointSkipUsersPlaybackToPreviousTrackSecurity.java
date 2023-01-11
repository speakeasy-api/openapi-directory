package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSkipUsersPlaybackToPreviousTrackSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeSpotifyAuth spotifyAuth;
    public EndpointSkipUsersPlaybackToPreviousTrackSecurity withSpotifyAuth(openapisdk.models.shared.SchemeSpotifyAuth spotifyAuth) {
        this.spotifyAuth = spotifyAuth;
        return this;
    }
}