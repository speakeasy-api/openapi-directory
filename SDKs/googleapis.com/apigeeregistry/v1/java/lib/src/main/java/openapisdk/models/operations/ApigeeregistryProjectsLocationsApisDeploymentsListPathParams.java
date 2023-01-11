package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsApisDeploymentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public ApigeeregistryProjectsLocationsApisDeploymentsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}