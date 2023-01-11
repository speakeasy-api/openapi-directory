package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointToggleShuffleForUsersPlaybackHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointToggleShuffleForUsersPlaybackHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}