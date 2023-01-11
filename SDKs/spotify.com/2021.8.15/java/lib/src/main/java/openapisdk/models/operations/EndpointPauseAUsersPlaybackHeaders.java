package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointPauseAUsersPlaybackHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointPauseAUsersPlaybackHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}