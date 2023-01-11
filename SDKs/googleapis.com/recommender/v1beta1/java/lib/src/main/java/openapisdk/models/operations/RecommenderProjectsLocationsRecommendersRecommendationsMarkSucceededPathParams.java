package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams withName(String name) {
        this.name = name;
        return this;
    }
}