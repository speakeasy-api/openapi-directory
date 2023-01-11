package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BestFaresSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeAuth auth;
    public BestFaresSecurity withAuth(openapisdk.models.shared.SchemeAuth auth) {
        this.auth = auth;
        return this;
    }
}