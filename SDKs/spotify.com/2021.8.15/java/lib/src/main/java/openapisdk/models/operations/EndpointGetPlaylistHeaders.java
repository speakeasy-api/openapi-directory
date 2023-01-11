package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetPlaylistHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetPlaylistHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}