package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DiscoveryengineProjectsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}