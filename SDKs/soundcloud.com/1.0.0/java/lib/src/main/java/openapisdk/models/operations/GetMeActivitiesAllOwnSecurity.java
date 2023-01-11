package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeActivitiesAllOwnSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeAuthHeader authHeader;
    public GetMeActivitiesAllOwnSecurity withAuthHeader(openapisdk.models.shared.SchemeAuthHeader authHeader) {
        this.authHeader = authHeader;
        return this;
    }
}