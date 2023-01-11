package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnEpisodeHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetAnEpisodeHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}