package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetMultipleEpisodesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetMultipleEpisodesHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}