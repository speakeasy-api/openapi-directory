package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}