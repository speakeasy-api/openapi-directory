package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams withName(String name) {
        this.name = name;
        return this;
    }
}