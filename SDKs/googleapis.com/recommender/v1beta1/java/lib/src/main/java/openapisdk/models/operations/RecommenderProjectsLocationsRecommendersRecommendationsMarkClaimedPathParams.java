package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedPathParams withName(String name) {
        this.name = name;
        return this;
    }
}