package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFilePaymentConsentsConsentIdFileSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeTppoAuth2Security tppoAuth2Security;
    public CreateFilePaymentConsentsConsentIdFileSecurity withTppoAuth2Security(openapisdk.models.shared.SchemeTppoAuth2Security tppoAuth2Security) {
        this.tppoAuth2Security = tppoAuth2Security;
        return this;
    }
}