package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckUsersSavedShowsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeSpotifyAuth spotifyAuth;
    public EndpointCheckUsersSavedShowsSecurity withSpotifyAuth(openapisdk.models.shared.SchemeSpotifyAuth spotifyAuth) {
        this.spotifyAuth = spotifyAuth;
        return this;
    }
}