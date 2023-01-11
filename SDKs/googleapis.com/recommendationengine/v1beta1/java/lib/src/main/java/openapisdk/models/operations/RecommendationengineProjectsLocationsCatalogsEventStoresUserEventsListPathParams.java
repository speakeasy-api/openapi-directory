package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}