package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsRecommendersRecommendationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecommenderProjectsLocationsRecommendersRecommendationsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}