package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointStartAUsersPlaybackHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointStartAUsersPlaybackHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}