package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFeaturesFeatureIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=featureId")
    public Long featureId;
    public GetFeaturesFeatureIdPathParams withFeatureId(Long featureId) {
        this.featureId = featureId;
        return this;
    }
}