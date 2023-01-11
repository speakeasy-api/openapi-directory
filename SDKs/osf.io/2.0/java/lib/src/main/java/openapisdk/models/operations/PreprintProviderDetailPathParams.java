package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprintProviderDetailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preprint_provider_id")
    public String preprintProviderId;
    public PreprintProviderDetailPathParams withPreprintProviderId(String preprintProviderId) {
        this.preprintProviderId = preprintProviderId;
        return this;
    }
}