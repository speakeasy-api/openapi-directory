package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LinkApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=external_id")
    public String externalId;
    public LinkApplicationPathParams withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public LinkApplicationProviderEnum provider;
    public LinkApplicationPathParams withProvider(LinkApplicationProviderEnum provider) {
        this.provider = provider;
        return this;
    }
}