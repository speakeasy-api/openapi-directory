package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetUsersProfileHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetUsersProfileHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}