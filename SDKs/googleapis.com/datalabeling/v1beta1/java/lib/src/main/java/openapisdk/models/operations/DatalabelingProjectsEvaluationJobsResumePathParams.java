package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsEvaluationJobsResumePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatalabelingProjectsEvaluationJobsResumePathParams withName(String name) {
        this.name = name;
        return this;
    }
}