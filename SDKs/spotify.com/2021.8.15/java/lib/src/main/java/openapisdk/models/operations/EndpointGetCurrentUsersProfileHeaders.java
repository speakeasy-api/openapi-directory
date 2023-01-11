package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetCurrentUsersProfileHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetCurrentUsersProfileHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}