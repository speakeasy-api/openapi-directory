package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSkipUsersPlaybackToNextTrackHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointSkipUsersPlaybackToNextTrackHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}