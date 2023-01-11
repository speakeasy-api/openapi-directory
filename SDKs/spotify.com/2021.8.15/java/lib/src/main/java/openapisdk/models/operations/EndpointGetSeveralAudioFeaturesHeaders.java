package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetSeveralAudioFeaturesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetSeveralAudioFeaturesHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}