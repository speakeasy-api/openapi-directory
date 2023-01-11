package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecommendationengineProjectsLocationsCatalogsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecommendationengineProjectsLocationsCatalogsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}