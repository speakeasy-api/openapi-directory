package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSeekToPositionInCurrentlyPlayingTrackHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointSeekToPositionInCurrentlyPlayingTrackHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}