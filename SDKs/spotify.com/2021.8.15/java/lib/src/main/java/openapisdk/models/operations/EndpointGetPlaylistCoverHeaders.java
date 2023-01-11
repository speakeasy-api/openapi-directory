package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetPlaylistCoverHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetPlaylistCoverHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}