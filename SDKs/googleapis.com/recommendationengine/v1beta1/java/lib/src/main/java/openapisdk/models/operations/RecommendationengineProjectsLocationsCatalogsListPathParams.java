package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecommendationengineProjectsLocationsCatalogsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}