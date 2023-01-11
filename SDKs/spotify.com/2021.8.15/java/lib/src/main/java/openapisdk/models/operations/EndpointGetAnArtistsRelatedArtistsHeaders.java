package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnArtistsRelatedArtistsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetAnArtistsRelatedArtistsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}