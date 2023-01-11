package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportIterationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public ExportIterationHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}