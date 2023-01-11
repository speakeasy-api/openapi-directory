package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetListUsersPlaylistsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetListUsersPlaylistsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}