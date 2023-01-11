package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetImageRegionProposalsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetImageRegionProposalsHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}