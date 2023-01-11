package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeAuth auth;
    public CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity withAuth(openapisdk.models.shared.SchemeAuth auth) {
        this.auth = auth;
        return this;
    }
}