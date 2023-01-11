package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckIfUserFollowsPlaylistHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointCheckIfUserFollowsPlaylistHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}