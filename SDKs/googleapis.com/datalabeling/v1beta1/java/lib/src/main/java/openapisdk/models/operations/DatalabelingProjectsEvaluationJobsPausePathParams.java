package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsEvaluationJobsPausePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatalabelingProjectsEvaluationJobsPausePathParams withName(String name) {
        this.name = name;
        return this;
    }
}