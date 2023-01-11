package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsBatchUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public JobsProjectsTenantsJobsBatchUpdatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}