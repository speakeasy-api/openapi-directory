package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsCompaniesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public JobsProjectsTenantsCompaniesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}