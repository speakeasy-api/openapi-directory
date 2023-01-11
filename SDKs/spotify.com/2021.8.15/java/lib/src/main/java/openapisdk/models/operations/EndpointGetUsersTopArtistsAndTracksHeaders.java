package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetUsersTopArtistsAndTracksHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetUsersTopArtistsAndTracksHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}