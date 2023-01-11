package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetUsersSavedEpisodesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetUsersSavedEpisodesHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}