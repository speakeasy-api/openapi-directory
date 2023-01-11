package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomesticScheduledPaymentConsentsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeTppoAuth2Security tppoAuth2Security;
    public CreateDomesticScheduledPaymentConsentsSecurity withTppoAuth2Security(openapisdk.models.shared.SchemeTppoAuth2Security tppoAuth2Security) {
        this.tppoAuth2Security = tppoAuth2Security;
        return this;
    }
}