package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetACategoriesPlaylistsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetACategoriesPlaylistsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}