package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointUploadCustomPlaylistCoverSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeSpotifyAuth spotifyAuth;
    public EndpointUploadCustomPlaylistCoverSecurity withSpotifyAuth(openapisdk.models.shared.SchemeSpotifyAuth spotifyAuth) {
        this.spotifyAuth = spotifyAuth;
        return this;
    }
}