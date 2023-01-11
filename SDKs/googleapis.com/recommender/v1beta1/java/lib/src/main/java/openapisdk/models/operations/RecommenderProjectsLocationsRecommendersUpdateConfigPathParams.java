package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsRecommendersUpdateConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecommenderProjectsLocationsRecommendersUpdateConfigPathParams withName(String name) {
        this.name = name;
        return this;
    }
}