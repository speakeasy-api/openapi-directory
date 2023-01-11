package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigPathParams withName(String name) {
        this.name = name;
        return this;
    }
}