package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetTrackHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetTrackHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}