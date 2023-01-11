package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetSeveralTracksHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetSeveralTracksHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}