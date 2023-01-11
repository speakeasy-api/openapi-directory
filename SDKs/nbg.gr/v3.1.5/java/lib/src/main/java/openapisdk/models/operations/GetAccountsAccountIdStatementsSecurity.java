package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountsAccountIdStatementsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeAuthorizationCodeToken authorizationCodeToken;
    public GetAccountsAccountIdStatementsSecurity withAuthorizationCodeToken(openapisdk.models.shared.SchemeAuthorizationCodeToken authorizationCodeToken) {
        this.authorizationCodeToken = authorizationCodeToken;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeClientId clientId;
    public GetAccountsAccountIdStatementsSecurity withClientId(openapisdk.models.shared.SchemeClientId clientId) {
        this.clientId = clientId;
        return this;
    }
}