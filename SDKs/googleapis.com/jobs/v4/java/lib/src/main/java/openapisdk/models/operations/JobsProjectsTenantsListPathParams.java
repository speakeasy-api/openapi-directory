package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public JobsProjectsTenantsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}