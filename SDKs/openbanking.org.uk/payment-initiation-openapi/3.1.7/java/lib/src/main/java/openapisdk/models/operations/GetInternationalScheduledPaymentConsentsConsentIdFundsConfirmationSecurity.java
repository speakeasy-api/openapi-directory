package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemePsuoAuth2Security psuoAuth2Security;
    public GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity withPsuoAuth2Security(openapisdk.models.shared.SchemePsuoAuth2Security psuoAuth2Security) {
        this.psuoAuth2Security = psuoAuth2Security;
        return this;
    }
}