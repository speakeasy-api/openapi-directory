package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemePsuoAuth2Security psuoAuth2Security;
    public GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity withPsuoAuth2Security(openapisdk.models.shared.SchemePsuoAuth2Security psuoAuth2Security) {
        this.psuoAuth2Security = psuoAuth2Security;
        return this;
    }
}