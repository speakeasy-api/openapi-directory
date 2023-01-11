package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomesticScheduledPaymentsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemePsuoAuth2Security psuoAuth2Security;
    public CreateDomesticScheduledPaymentsSecurity withPsuoAuth2Security(openapisdk.models.shared.SchemePsuoAuth2Security psuoAuth2Security) {
        this.psuoAuth2Security = psuoAuth2Security;
        return this;
    }
}