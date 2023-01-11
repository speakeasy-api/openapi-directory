package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetRecommendationGenresHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetRecommendationGenresHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}