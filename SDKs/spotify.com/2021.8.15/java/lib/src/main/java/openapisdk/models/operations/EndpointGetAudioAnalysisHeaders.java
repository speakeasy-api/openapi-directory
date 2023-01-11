package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAudioAnalysisHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetAudioAnalysisHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}