package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnArtistsTopTracksHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetAnArtistsTopTracksHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}