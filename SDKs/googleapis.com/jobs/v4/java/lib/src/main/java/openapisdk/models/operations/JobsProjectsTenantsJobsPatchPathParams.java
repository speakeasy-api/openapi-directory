package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsTenantsJobsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public JobsProjectsTenantsJobsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}