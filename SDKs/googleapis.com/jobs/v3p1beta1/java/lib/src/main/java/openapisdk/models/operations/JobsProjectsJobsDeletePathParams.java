package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobsProjectsJobsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public JobsProjectsJobsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}