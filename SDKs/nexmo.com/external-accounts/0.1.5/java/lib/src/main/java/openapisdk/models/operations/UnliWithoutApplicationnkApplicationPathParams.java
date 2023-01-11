package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnliWithoutApplicationnkApplicationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application_id")
    public String applicationId;
    public UnliWithoutApplicationnkApplicationPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=external_id")
    public String externalId;
    public UnliWithoutApplicationnkApplicationPathParams withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=provider")
    public UnliWithoutApplicationnkApplicationProviderEnum provider;
    public UnliWithoutApplicationnkApplicationPathParams withProvider(UnliWithoutApplicationnkApplicationProviderEnum provider) {
        this.provider = provider;
        return this;
    }
}