package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprintProviderTaxonomiesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=preprint_provider_id")
    public String preprintProviderId;
    public PreprintProviderTaxonomiesListPathParams withPreprintProviderId(String preprintProviderId) {
        this.preprintProviderId = preprintProviderId;
        return this;
    }
}