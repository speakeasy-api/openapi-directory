package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}