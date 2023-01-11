package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnArtistsAlbumsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetAnArtistsAlbumsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}