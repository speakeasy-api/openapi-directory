package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePayorLinksSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOAuthVeloBackOffice oAuthVeloBackOffice;
    public CreatePayorLinksSecurity withOAuthVeloBackOffice(openapisdk.models.shared.SchemeOAuthVeloBackOffice oAuthVeloBackOffice) {
        this.oAuthVeloBackOffice = oAuthVeloBackOffice;
        return this;
    }
}