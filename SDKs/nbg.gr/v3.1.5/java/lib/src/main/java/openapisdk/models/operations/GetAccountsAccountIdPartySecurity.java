package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountIdPartySecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeAuthorizationCodeToken authorizationCodeToken;
    public GetAccountsAccountIdPartySecurity withAuthorizationCodeToken(openapisdk.models.shared.SchemeAuthorizationCodeToken authorizationCodeToken) {
        this.authorizationCodeToken = authorizationCodeToken;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeClientId clientId;
    public GetAccountsAccountIdPartySecurity withClientId(openapisdk.models.shared.SchemeClientId clientId) {
        this.clientId = clientId;
        return this;
    }
}