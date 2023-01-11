package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountAccessConsentsConsentIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeClientCredentialsToken clientCredentialsToken;
    public GetAccountAccessConsentsConsentIdSecurity withClientCredentialsToken(openapisdk.models.shared.SchemeClientCredentialsToken clientCredentialsToken) {
        this.clientCredentialsToken = clientCredentialsToken;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeClientId clientId;
    public GetAccountAccessConsentsConsentIdSecurity withClientId(openapisdk.models.shared.SchemeClientId clientId) {
        this.clientId = clientId;
        return this;
    }
}