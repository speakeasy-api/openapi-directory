package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}