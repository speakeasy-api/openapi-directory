package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=servingConfig")
    public String servingConfig;
    public DiscoveryengineProjectsLocationsDataStoresServingConfigsRecommendPathParams withServingConfig(String servingConfig) {
        this.servingConfig = servingConfig;
        return this;
    }
}