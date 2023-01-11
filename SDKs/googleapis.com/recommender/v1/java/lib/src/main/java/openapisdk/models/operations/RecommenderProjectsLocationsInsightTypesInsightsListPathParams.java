package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsInsightTypesInsightsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecommenderProjectsLocationsInsightTypesInsightsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}