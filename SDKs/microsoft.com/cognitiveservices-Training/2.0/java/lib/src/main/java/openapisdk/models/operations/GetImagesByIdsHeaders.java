package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImagesByIdsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetImagesByIdsHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}