package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImportPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}