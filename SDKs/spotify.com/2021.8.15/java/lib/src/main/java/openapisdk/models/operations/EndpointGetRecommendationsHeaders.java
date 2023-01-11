package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetRecommendationsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetRecommendationsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}