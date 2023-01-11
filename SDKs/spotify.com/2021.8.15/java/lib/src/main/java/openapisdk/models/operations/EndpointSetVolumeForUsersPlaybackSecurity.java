package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSetVolumeForUsersPlaybackSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeSpotifyAuth spotifyAuth;
    public EndpointSetVolumeForUsersPlaybackSecurity withSpotifyAuth(openapisdk.models.shared.SchemeSpotifyAuth spotifyAuth) {
        this.spotifyAuth = spotifyAuth;
        return this;
    }
}