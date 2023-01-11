package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Training-Key")
    public String trainingKey;
    public GetDomainHeaders withTrainingKey(String trainingKey) {
        this.trainingKey = trainingKey;
        return this;
    }
}