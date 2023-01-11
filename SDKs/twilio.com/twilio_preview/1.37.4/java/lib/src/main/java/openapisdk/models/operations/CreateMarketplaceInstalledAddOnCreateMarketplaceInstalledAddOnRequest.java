package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest {
    @SpeakeasyMetadata("form:name=AcceptTermsOfService")
    public Boolean acceptTermsOfService;
    public CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest withAcceptTermsOfService(Boolean acceptTermsOfService) {
        this.acceptTermsOfService = acceptTermsOfService;
        return this;
    }
    @SpeakeasyMetadata("form:name=AvailableAddOnSid")
    public String availableAddOnSid;
    public CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest withAvailableAddOnSid(String availableAddOnSid) {
        this.availableAddOnSid = availableAddOnSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Configuration")
    public Object configuration;
    public CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest withConfiguration(Object configuration) {
        this.configuration = configuration;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}