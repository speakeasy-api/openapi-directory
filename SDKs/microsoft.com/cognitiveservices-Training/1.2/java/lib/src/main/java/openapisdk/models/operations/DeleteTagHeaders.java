package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTagHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public DeleteTagHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}