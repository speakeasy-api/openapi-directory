package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams withName(String name) {
        this.name = name;
        return this;
    }
}