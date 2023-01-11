package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetNewReleasesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetNewReleasesHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}