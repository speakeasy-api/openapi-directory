package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUsersUserIdFollowingsFollowingIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeAuthHeader authHeader;
    public GetUsersUserIdFollowingsFollowingIdSecurity withAuthHeader(openapisdk.models.shared.SchemeAuthHeader authHeader) {
        this.authHeader = authHeader;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeClientId clientId;
    public GetUsersUserIdFollowingsFollowingIdSecurity withClientId(openapisdk.models.shared.SchemeClientId clientId) {
        this.clientId = clientId;
        return this;
    }
}