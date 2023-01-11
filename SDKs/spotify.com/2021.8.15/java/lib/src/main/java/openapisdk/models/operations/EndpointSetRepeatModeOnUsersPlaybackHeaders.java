package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSetRepeatModeOnUsersPlaybackHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointSetRepeatModeOnUsersPlaybackHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}