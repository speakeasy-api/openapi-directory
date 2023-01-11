package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnArtistHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetAnArtistHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}