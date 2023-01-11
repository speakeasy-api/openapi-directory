package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetFollowedHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetFollowedHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}