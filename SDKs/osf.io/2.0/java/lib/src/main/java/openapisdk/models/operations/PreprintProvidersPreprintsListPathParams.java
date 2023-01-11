package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprintProvidersPreprintsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preprint_provider_id")
    public String preprintProviderId;
    public PreprintProvidersPreprintsListPathParams withPreprintProviderId(String preprintProviderId) {
        this.preprintProviderId = preprintProviderId;
        return this;
    }
}