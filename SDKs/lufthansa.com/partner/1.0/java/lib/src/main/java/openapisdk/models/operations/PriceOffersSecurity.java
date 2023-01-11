package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PriceOffersSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeAuth auth;
    public PriceOffersSecurity withAuth(openapisdk.models.shared.SchemeAuth auth) {
        this.auth = auth;
        return this;
    }
}