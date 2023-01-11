package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsRecommendersRecommendationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecommenderProjectsLocationsRecommendersRecommendationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}