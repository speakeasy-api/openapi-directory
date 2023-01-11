package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetFeaturedPlaylistsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetFeaturedPlaylistsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}