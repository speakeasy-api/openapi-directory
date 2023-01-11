package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsCompaniesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public JobsProjectsTenantsCompaniesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}