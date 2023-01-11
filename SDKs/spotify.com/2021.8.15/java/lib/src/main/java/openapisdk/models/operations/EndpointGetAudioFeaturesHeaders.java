package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAudioFeaturesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetAudioFeaturesHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}