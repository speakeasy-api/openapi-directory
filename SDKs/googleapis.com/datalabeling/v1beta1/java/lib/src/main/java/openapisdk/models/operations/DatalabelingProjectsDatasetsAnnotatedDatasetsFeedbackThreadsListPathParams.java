package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}