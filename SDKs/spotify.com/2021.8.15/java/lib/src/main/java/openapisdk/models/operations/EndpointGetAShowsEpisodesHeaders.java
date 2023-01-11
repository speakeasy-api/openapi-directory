package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAShowsEpisodesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetAShowsEpisodesHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}