package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckCurrentUserFollowsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointCheckCurrentUserFollowsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}