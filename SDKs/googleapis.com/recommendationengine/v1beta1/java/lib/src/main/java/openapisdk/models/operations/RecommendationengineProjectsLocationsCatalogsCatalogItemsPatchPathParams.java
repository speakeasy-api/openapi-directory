package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}