package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeaturePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=featureId")
    public String featureId;
    public GetFeaturePathParams withFeatureId(String featureId) {
        this.featureId = featureId;
        return this;
    }
}