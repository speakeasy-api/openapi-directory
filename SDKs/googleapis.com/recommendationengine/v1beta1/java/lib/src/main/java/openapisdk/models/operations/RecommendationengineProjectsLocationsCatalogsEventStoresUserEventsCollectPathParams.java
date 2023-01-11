package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollectPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}