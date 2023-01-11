package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}