package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetTheUsersCurrentlyPlayingTrackHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetTheUsersCurrentlyPlayingTrackHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}