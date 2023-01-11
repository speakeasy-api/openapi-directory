package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SuggestTagsAndRegionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public SuggestTagsAndRegionsHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}