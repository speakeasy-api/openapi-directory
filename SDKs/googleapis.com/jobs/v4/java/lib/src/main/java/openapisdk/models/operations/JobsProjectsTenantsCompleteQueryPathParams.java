package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsCompleteQueryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tenant")
    public String tenant;
    public JobsProjectsTenantsCompleteQueryPathParams withTenant(String tenant) {
        this.tenant = tenant;
        return this;
    }
}