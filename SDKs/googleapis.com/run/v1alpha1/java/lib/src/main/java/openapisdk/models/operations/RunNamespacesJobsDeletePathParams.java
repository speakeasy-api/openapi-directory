package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunNamespacesJobsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RunNamespacesJobsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}