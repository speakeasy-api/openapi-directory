package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsEvaluationJobsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DatalabelingProjectsEvaluationJobsPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}