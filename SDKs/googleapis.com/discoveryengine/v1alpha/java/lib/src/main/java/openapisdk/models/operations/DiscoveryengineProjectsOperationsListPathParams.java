package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoveryengineProjectsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DiscoveryengineProjectsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}